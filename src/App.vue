<script setup lang="ts">
import Navbar from './components/Navbar.vue';

</script>

<template>
  <div class="container">
    <Navbar />
    <RouterView />
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
</style>