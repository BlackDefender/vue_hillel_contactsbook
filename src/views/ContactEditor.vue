<template>
    <form class="contact-form" @submit.prevent="save">
        <button class="contact-form__close-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42">
                <path fill="currentColor" d="M42 20H22V0h-2v20H0v2h20v20h2V22h20z"/>
            </svg>
        </button>

        <section class="contact-form__fields-box">
            <section class="contact-form__main-info">
                <label class="contact-form__label contact-form__label--file">
                    <input type="file" name="image" class="contact-form__input">
                </label>

                <section class="contact-form__main-info-wrapper">
                    <label class="contact-form__label contact-form__label--half">
                        <span class="contact-form__label-text">Name</span>
                        <input type="text" class="contact-form__input" v-model="user.name">
                    </label>

                    <label class="contact-form__label contact-form__label--half">
                        <span class="contact-form__label-text">Surname</span>
                        <input type="text" class="contact-form__input" v-model="user.surname">
                    </label>

                    <label class="contact-form__label">
                        <span class="contact-form__label-text">Description</span>
                        <textarea class="contact-form__textarea" rows="2" v-model="user.description"></textarea>
                    </label>
                </section>
            </section>

            <label class="contact-form__label">
                <span class="contact-form__label-text">Category</span>
                <select class="contact-form__input" v-model="user.category">
                    <option v-for="category in $parent.categories" :key="category._id" :value="category._id">{{category.name}}</option>
                </select>
            </label>

            <label class="contact-form__label">
                <span class="contact-form__label-text">Phone</span>
                <input type="tel" class="contact-form__input" v-model="user.phone">
            </label>

            <label class="contact-form__label">
                <span class="contact-form__label-text">Email</span>
                <input type="email" class="contact-form__input" v-model="user.email">
            </label>

            <label class="contact-form__label">
                <span class="contact-form__label-text">Birth day</span>
                <input type="text" class="contact-form__input" v-model="user.bornDate">
            </label>

            <label class="contact-form__label">
                <span class="contact-form__label-text">Information</span>
                <textarea class="contact-form__textarea" rows="5" v-model="user.information"></textarea>
            </label>

            <label class="contact-form__label">
                <span class="contact-form__label-text">Instagram</span>
                <input type="tel" class="contact-form__input" v-model="user.instagram">
            </label>

            <label class="contact-form__label">
                <span class="contact-form__label-text">Facebook</span>
                <input type="tel" class="contact-form__input" v-model="user.facebook">
            </label>
        </section>

        <div class="contact-form__buttons-box">
            <button type="submit" class="contact-form__button contact-form__button--main">Save changes</button>
            <button class="contact-form__button contact-form__button--second">Delete contact</button>
        </div>
    </form>
</template>

<script>
    import config from '@/config';

    export default {
        name: "ContactEditor",
        data() {
            return {
                user: {
                    image: '',
                    name: '',
                    surname: '',
                    description: '',
                    phone: '',
                    email: '',
                    bornDate: '',
                    information: '',
                    instagram: '',
                    facebook: ''
                }
            }
        },
        created() {

        },
        methods: {
            save() {
                this.add();
            },
            add() {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', `${config.apiBaseURL}/phonebook`);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = () => {
                    const response = JSON.parse(xhr.responseText);
                    console.log(response);
                };
                xhr.onerror = () => {
                    alert('Add failed');
                };
                xhr.send(JSON.stringify(this.user));
            }
        }
    }
</script>

<style scoped>

</style>