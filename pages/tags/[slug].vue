<template>
  <div>
    <header class="title" v-if="tag">
      <h1>{{ tag.name }}</h1>
      <p v-if="tag.description" v-html="tag.description"></p>
      <p>Here {{ be }} <strong>{{ projectCount }}</strong> that I've worked on tagged <strong>{{ tag.name }}</strong>.</p>
    </header>
    <div>
      <Project v-for="project in projects" :project="project" :key="project.slug" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from '~/store'

const route = useRoute()
const store = useStore()

const tag = computed(() => {
  const t = store.getTag(route.params.slug)
  if (!t) {
    throw createError({
      statusCode: 404,
      message: 'Tag not found'
    })
  }
  return t
})

const projects = computed(() => store.getProjectsTagged(route.params.slug))

const be = computed(() => projects.value.length === 1 ? 'is' : 'are')

const projectCount = computed(() => {
  let text = `${projects.value.length} project`
  if (projects.value.length !== 1) {
    text = `${text}s`
  }
  return text
})

const title = computed(() => `${tag.value.name} by Derek Brooks`)

usePageMeta({
  title: title.value,
  description: tag.value.description
})
</script>

<style scoped>
p {
  white-space: pre-line;
}
</style>
