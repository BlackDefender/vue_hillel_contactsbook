<template>
    <form class="contact-form" @submit.prevent="register">
        <section>
            <label class="contact-form__label">
                <span class="contact-form__label-text">Name</span>
                <input v-model="newUser.name" type="text" class="contact-form__input" min="2" max="256">
            </label>
            <label class="contact-form__label">
                <span class="contact-form__label-text">Surname</span>
                <input v-model="newUser.surname" type="text" class="contact-form__input" min="2" max="256">
            </label>
            <label class="contact-form__label">
                <span class="contact-form__label-text">Email</span>
                <input v-model="newUser.email" type="email" class="contact-form__input" min="6" max="70">
            </label>
            <label class="contact-form__label">
                <span class="contact-form__label-text">Password</span>
                <input v-model="newUser.password" type="password" class="contact-form__input" min="4" max="256">
            </label>
        </section>
        <div class="contact-form__buttons-box">
            <button type="submit" class="contact-form__button contact-form__button--main">Register</button>
        </div>
    </form>
</template>

<script>
    import config from '@/config';
    import eventBus from '@/eventBus';

    export default {
        name: "Register",
        data() {
            return {
                newUser: {
                    name: '',
                    surname: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            register() {
                if (
                    this.newUser.name.length >= 2 && this.newUser.name.length <= 256
                    && this.newUser.surname.length >= 2 && this.newUser.surname.length <= 256
                    && this.newUser.email.length >= 6 && this.newUser.email.length <= 70
                    && this.newUser.email.length >= 4 && this.newUser.email.length <= 256
                ) {
                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', `${config.apiBaseURL}/users/register`);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.onload = () => {
                        const response = JSON.parse(xhr.responseText);
                        alert(response.message);
                        this.autoLogin();
                    };
                    xhr.onerror = () => {
                        alert('Registeration failed');
                    };
                    xhr.send(JSON.stringify(this.newUser));
                } else {
                    alert('Wrong input');
                }
            },
            autoLogin() {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', `${config.apiBaseURL}/users/login`);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = () => {
                    eventBus.$emit('login',{email:this.newUser.email});
                    this.$router.push({path: '/'})
                };
                xhr.onerror = () => {
                    alert('Login failed');
                };
                const loginData = {
                    email: this.newUser.email,
                    password: this.newUser.password
                };
                xhr.send(JSON.stringify(loginData));
            }
        }
    }
</script>

<style scoped>

</style>