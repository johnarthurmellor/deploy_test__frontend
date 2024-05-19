<script setup>
defineProps({
    title: String,
    body: String,
    createdAt: String,
    updatedAt: String
})
</script>

<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ body }}</p>
        <div>
            <p>Создано: {{ createdAt }}</p>
            <p>Обновлено: {{ updatedAt }}</p>
        </div>
    </div>
</template>

<style></style>