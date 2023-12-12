<script setup lang="ts">

import { defineProps } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const { quiz } = defineProps(['quiz'])

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`)
}

</script>

<template>
  <div class="quize" @click="navigateToQuiz">
    <img :src=quiz.img :alt="quiz.name">
    <h2>{{ quiz.name }}</h2>
    <p>{{ quiz.questions.length }} questions</p>
  </div>
</template>

<style scoped>
.quize {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid white;
  padding: 1rem;
  cursor: pointer;
}

.quize img {
  display: flex;
  height: 7rem;
  width: 7rem;
}
</style>