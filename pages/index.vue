<template>
  <div>
    <header class="title">
      <h1>Hi, I'm Derek</h1>
      <h2>Professional tech lead, software engineer, and technologist.</h2>
      <h3>Amateur carpenter, photographer, and pizza maker.</h3>
      <p>Below are some projects that I've been particularly excited to work on.</p>
      <!-- <p>You can also check out my <NuxtLink to="/projects">full portfolio</NuxtLink>, <NuxtLink to="/resume">resume</NuxtLink>, or <NuxtLink to="/tags">some technologies</NuxtLink> that I've worked with.</p> -->
    </header>
    <div>
      <Project v-for="project in featuredProjects" :project="project" v-bind:key="project.slug" />
    </div>
  </div>
</template>

<script>
import { useStore } from '~/store'

export default {
  setup() {
    const store = useStore()
    return { featuredProjects: store.featuredProjects }
  },
}
</script>
