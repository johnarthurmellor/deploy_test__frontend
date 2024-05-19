<script setup>
import { ref } from 'vue';
import axios from 'axios';

import { BASE_URL } from '@/config';

const form = ref({ username: '', email: '', first_name: '', last_name: '', password: '' });

const error = ref(null);

const register = async () => {
    try {
        const response = await axios.post(BASE_URL + 'register/', form.value);
        console.log('Регистрация успешна:', response.data);
    } catch (err) {
        error.value = 'Ошибка регистрации: ' + (err.response?.data?.detail || err.message);
    }
};
</script>

<template>
    <div class="register">
        <h2>Регистрация</h2>
        <form @submit.prevent="register">
            <div>
                <label for="username">Имя пользователя:</label>
                <input type="text" v-model="form.username" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="form.email" required>
            </div>
            <div>
                <label for="first_name">Имя:</label>
                <input type="text" v-model="form.first_name" required>
            </div>
            <div>
                <label for="last_name">Фамилия:</label>
                <input type="text" v-model="form.last_name" required>
            </div>
            <div>
                <label for="password">Пароль:</label>
                <input type="password" v-model="form.password" required>
            </div>
            <button type="submit">Зарегистрироваться</button>
        </form>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<style scoped>
.register {
    max-width: 400px;
    margin: auto;
}
</style>