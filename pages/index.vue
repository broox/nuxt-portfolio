<template>
  <header>
    <h1>Hi, I'm Derek</h1>
    <h2>Professional tech lead, software engineer, and technologist.</h2>
    <h3>Amateur carpenter, photographer, and pizza maker.</h3>
    <p>Below are some projects that I've been particularly excited to work on.</p>
    <!-- <p>You can also check out my <NuxtLink to="/projects">full portfolio</NuxtLink>, <NuxtLink to="/resume">resume</NuxtLink>, or <NuxtLink to="/tags">some technologies</NuxtLink> that I've worked with.</p> -->
  </header>
  <div>
    <Project v-for="project in store.featuredProjects" :project="project" v-bind:key="project.slug" />
  </div>
</template>

<script>
import { useStore } from '~/store'

export default {
  setup() {
    const store = useStore()
    return { store }
  },
}
</script>

<style scoped>
header {
  margin: 2.5rem 0;
}

h1 {
  color: #000;
  font-size: 2em;
  font-weight: 700;
  margin: 0.5em 0;
}

h2 {
  color: #222;
  font-size: 1.5em;
  font-weight: 600;
  margin: 0.5em 0;
}

h3 {
  color: #444;
  font-size: 1.25em;
  font-weight: 500;
  margin: 0.5em 0;
}

p {
  margin: 1em 0;
}

</style>