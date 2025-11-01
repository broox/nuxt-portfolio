<template>
  <div>
    <header class="title">
      <h1>Projects</h1>
      <p>Here's a rough list of <strong>{{ projects.length }} projects</strong> that I've worked on over the past <strong>{{ years }} years</strong>. Some projects have been omitted due to confidentiality concerns.</p>
    </header>
    <div>
      <Project v-for="project in projects" :project="project" :key="project.slug" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from '~/store'

const store = useStore()
const { $getMetaTags } = useNuxtApp()

const projects = store.projects

const years = computed(() => {
  const currentYear = new Date().getFullYear()
  const oldestProjectYear = projects.reduce(function(previous, current) {
    const previousProjectYear = new Date(previous.updatedAt).getUTCFullYear()
    const currentProjectYear = new Date(current.updatedAt).getUTCFullYear()
    return previousProjectYear < currentProjectYear ? previousProjectYear : currentProjectYear
  })
  return currentYear - oldestProjectYear
})

const title = 'Derek Brooks\'s Portfolio Projects'
useHead(() => ({
  title,
  meta: $getMetaTags({
    title,
    description: `This is a rough list of ${projects.length} projects that I've worked on over the past ${years.value} years.`
  }),
}))
</script>
