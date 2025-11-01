<template>
  <li :style="style">
    <NuxtLink :to="url" :title="title">{{ tag.name }}</NuxtLink>
  </li>
</template>

<script setup>
const props = defineProps({
  tag: Object
})

const style = computed(() => `font-size: ${props.tag.fontSize}em`)

const title = computed(() => {
  let titleText = `${props.tag.projectCount} project`
  if (props.tag.projectCount !== 1) {
    titleText = `${titleText}s`
  }
  return titleText
})

const url = computed(() => `/tags/${props.tag.slug}/`)
</script>

<style scoped>
  a {
    padding: 0.5rem;
  }
  a:hover {
    background-color: rgb(37, 99, 235);
    border-radius: 0.25em;
    color: white;
  }
</style>
