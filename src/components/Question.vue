<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['selectOption'])
const { question } = defineProps(['question'])

const emitSelectOption = (isCorrect: boolean) => [
    emit("selectOption", isCorrect)
]

</script>

<template>
    <div>
        <h1>{{ question.text }}</h1>
    </div>
    <div class="answers-options">
        <div class="answer" v-for="ans in question.options" :key="ans.id" @click="emitSelectOption(ans.isCorrect)">
            <h1 class="option">{{ ans.label }}</h1>
            <h1 class="value">{{ ans.text }}</h1>
        </div>

    </div>
</template>

<style scoped>
.answers-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.answer {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.option {
    width: 2rem;
    background-color: rgb(128, 126, 126);
    display: flex;
    align-items: center;
    justify-content: center;
}

.value {
    width: 100%;
    background-color: rgb(128, 126, 126);
}
</style>