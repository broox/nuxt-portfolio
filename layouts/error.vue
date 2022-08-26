<template>
  <div>
    <h1 v-if="error.message">{{error.message}}</h1>
    <h1 v-else>An error occurred</h1>
    <a href="/">Back to Portfolio</a>
  </div>
</template>

<script>
export default {
  props: ['error'],
  created() {
    console.log(this.error)
  }
}
</script>

<style scoped>
div {
  margin: 4rem auto;
  text-align: center;
}
</style>
