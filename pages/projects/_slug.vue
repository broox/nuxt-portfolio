<template>
  <div>
    <Project :project="project" v-bind:key="project.slug" v-if="project"/>
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
        this.$nuxt.context.error({
          status: 404,
          message: 'Project not found',
        })
      }
      return project
    }
  }
}
</script>
