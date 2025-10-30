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
      image: this.image,
    }
  },
  computed: {
    image() {
      try {
        if (this.latestVersion) {
          console.log('latestVersion')
          return require(`~/assets/images/${this.project.slug}-${this.latestVersion.version}.png`)
        } else {
          console.log(`~/assets/images/${this.project.slug}.png`)
          return require(`~/assets/images/${this.project.slug}.png`)
        }
      } catch (e) {
        console.log(e)
        return null
      }
    },
    latestVersion() {
      const versions = this.project.versions
      if (versions) {
        return versions[versions.length - 1]
      }
    },
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
