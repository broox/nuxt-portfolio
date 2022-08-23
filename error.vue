<template>
  <div>
    <h1 v-if="error.statusMessage">{{error.message}}</h1>
    <h1 v-else>An error occurred</h1>
    <a href="/" @click="handleError">Back to Portfolio</a>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>
div {
  margin: 4rem auto;
  text-align: center;
}
</style>