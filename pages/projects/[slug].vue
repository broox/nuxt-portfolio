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

const latestVersion = computed(() => {
  const versions = project.value.versions
  if (versions && versions.length > 0) {
    return versions[versions.length - 1]
  }
  return null
})

const { imgURL } = useProjectImage(project.value, latestVersion.value)

usePageMeta({
  title: title.value,
  description: project.value.description,
  image: imgURL.value
})
</script>
