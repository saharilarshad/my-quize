<script setup lang="ts">
import { ref, watch } from "vue"
import ImageQuiz from "../../public/quize.jpg"
import quizesData from "../lib/data.json"
import Card from "../components/Card.vue"
import NavbarVue from "../components/Navbar.vue";
import { RouterView } from "vue-router"

const quizes = ref(quizesData)
const inputSearching = ref("")
console.log(inputSearching.value);

watch(inputSearching, () => {
    quizes.value = quizesData.filter(qu => qu.name.toLowerCase().includes(inputSearching.value.toLowerCase()))
})

</script>

<template>
    <!-- <NavbarVue /> -->

    <div class="container">
        <header>
            <h1>Quizes</h1>
            <input type="text" placeholder="Search.." v-model.trim="inputSearching">
        </header>

        <div class="quizes-container">
            <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 42rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: 2rem;
}

input {
    padding: 5px;
    border: none;
    border-radius: 2px;
}

.quizes-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border: 1px solid white;
    border-radius: 1rem;
    padding: 1rem;
    gap: 1rem;
}

/* .quize {
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
} */
</style>