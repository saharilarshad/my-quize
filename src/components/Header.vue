<script setup lang="ts">
import { defineProps } from 'vue';

const { questionStatus, barStatus } = defineProps(['questionStatus', 'barStatus'])
</script>

<template>
    <h2>Question {{ questionStatus }}</h2>
    <div class="bar">
        <div class="completion" :style="{ width: barStatus }"></div>
    </div>
</template>

<style scoped>
.bar {
    width: 8rem;
    height: 2rem;
    border: 1px solid gray;
}

.completion {
    width: 33%;
    height: 100%;
    background-color: bisque;
}
</style>