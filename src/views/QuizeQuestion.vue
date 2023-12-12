<script setup lang="ts">
import { ref, computed } from "vue"
import Question from "../components/Question.vue"
import Header from "../components/Header.vue"
import { useRoute } from "vue-router"
import quizesData from "@/lib/data.json"
import Results from "../components/Results.vue"

const route = useRoute()
const currentQuestionIndex = ref(0)
const numberOfCorrectAnswer = ref(0)
const showResult = ref(false)

const quizId = parseInt(route.params.id)
const quiz = quizesData.find(q => q.id == quizId)
// const questionStatus = `${currentQuestionIndex.value}/${quiz?.questions.length}`
const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)
const barStatus = computed(() => `${currentQuestionIndex.value / quiz.questions.length * 100}%`)

const onSelectedOption = (isCorrect: boolean) => {
    console.log("emited", isCorrect);
    if (isCorrect) {
        numberOfCorrectAnswer.value++
    }

    if ((quiz.questions.length - 1) === currentQuestionIndex.value) {
        showResult.value = true
    }

    currentQuestionIndex.value++
}

</script>

<template>
    <div class="question">
        <div>
            <Header :questionStatus="questionStatus" :barStatus="barStatus" />
            <!-- {{ numberOfCorrectAnswer }} -->
        </div>
        <div>
            <Question v-if="!showResult" :question="quiz?.questions[currentQuestionIndex]"
                @selectOption="onSelectedOption" />
            <Results v-else  :numberOfCorrectAnswer="`${numberOfCorrectAnswer}/${quiz.questions.length}`"/>
        </div>
    </div>
</template>

<style scoped>
.question {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>