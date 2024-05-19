<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"
import PostList from "@/components/VPostList.vue"
import { BASE_URL } from "@/config";

const posts = ref([])

const fetchPosts = async () => {
    try {
        const { data } = await axios.get(BASE_URL + `posts/`);
        posts.value = data.map(obj => ({
            ...obj,
            created_at: formatDate(obj.created_at),
            updated_at: formatDate(obj.updated_at)
        }));
    } catch (err) { console.log(err); }
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

onMounted(async () => { await fetchPosts() });
</script>

<template>
    <div>
        <PostList :posts="posts" />
    </div>
</template>

<style></style>