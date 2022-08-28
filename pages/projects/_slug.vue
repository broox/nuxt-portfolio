<template>
  <div>
    <Project :project="project" v-if="project"/>
  </div>
</template>

<script>
import { useStore } from '~/store'

export default {
  setup() {
    const store = useStore()
    return { getProject: store.getProject }
  },
  head() {
    const title = `${this.project.title} by Derek Brooks`
    return {
      title,
      meta: this.$getMetaTags({ title, description: this.project.description }),
    }
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

const maxLength = 155;
