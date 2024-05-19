<script setup>
import Post from '@/components/VPost.vue'

defineProps({ posts: Array })
</script>

<template>
    <div>
        <Post v-for="post in posts" :key="post.id" :title="post.title" :body="post.body" :created-at="post.created_at"
            :updated-at="post.updated_at"></Post>
    </div>
</template>

<style></style>