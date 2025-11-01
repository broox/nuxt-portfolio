<template>
  <div>
    <Project :project="project" v-if="project"/>
  </div>
</template>

<script setup>
import { useStore } from '~/store'

const route = useRoute()
const { $getMetaTags } = useNuxtApp()

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

useHead(() => ({
  title: title.value,
  meta: $getMetaTags({
    title: title.value,
    description: project.value.description
  }),
}))
</script>
