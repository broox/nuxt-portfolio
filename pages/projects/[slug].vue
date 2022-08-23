<template>
  <div>
    <Project :project="project" v-bind:key="project.slug" />
  </div>
</template>

<script>
import { useStore } from '~/store'

export default {
  setup() {
    const store = useStore()
    return { getProject: store.getProject }
  },
  computed: {
    project() {
      const project = this.getProject(this.$route.params.slug)
      if (!project) {
        throw createError({ statusCode: 404, statusMessage: 'Project not found' })
      }
      return project
    }
  }
}
</script>