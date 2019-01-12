<template>
    <form class="contact-form" @submit.prevent="login">
        <section>
            <label class="contact-form__label">
                <span class="contact-form__label-text">Email</span>
                <input v-model="currentUser.email" type="email" class="contact-form__input">
            </label>
            <label class="contact-form__label">
                <span class="contact-form__label-text">Password</span>
                <input v-model="currentUser.password" type="password" class="contact-form__input">
            </label>
        </section>
        <div class="contact-form__buttons-box">
            <button type="submit" class="contact-form__button contact-form__button--main">Login</button>
        </div>
    </form>
</template>

<script>
    import config from '@/config';
    import eventBus from '@/eventBus';

    export default {
        name: "Login",
        data() {
            return {
                currentUser: {
                    email: 'alex@example.com',
                    password: 'qwerty'
                }
            }
        },
        methods: {
            login() {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', `${config.apiBaseURL}/users/login`);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.withCredentials = true;
                xhr.onload = () => {
                    eventBus.$emit('login',{email:this.currentUser.email});
                    /*const cookie = xhr.getResponseHeader('set-cookie');
                    document.cookie = cookie;*/
                    this.$router.push({path: '/'})
                };
                xhr.onerror = () => {
                    alert('Login failed');
                };
                xhr.send(JSON.stringify(this.currentUser));
            }
        }
    }
</script>

<style scoped>

</style>