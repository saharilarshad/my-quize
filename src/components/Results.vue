<script setup lang="ts">
import { defineProps } from 'vue';

const { numberOfCorrectAnswer } = defineProps(['numberOfCorrectAnswer'])
</script>

<template>
    <div>
        <h3>Your Results</h3>
        <p>{{numberOfCorrectAnswer}}</p>
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

div p {
    font-size: 24px;
}
</style>