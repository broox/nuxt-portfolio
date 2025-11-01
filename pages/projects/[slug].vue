<template>
  <div>
    <Project :project="project" v-if="project"/>
  </div>
</template>

<script setup>
import { useStore } from '~/store'

const route = useRoute()

const store = useStore()

const project = computed(() => {
  const proj = store.getProject(route.params.slug)
  if (!proj) {
    throw createError({
      statusCode: 404,
      message: 'Project not found'
    })
  }
  return proj
})

const title = computed(() => `${project.value.title} by Derek Brooks`)

usePageMeta({
  title: title.value,
  description: project.value.description
})
</script>
