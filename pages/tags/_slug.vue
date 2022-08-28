<template>
  <div>
    <header class="title" v-if="tag">
      <h1>{{tag.name}}</h1>
      <p v-if="tag.description" v-html="tag.description"></p>
      <p>Here {{be}} <strong>{{projectCount}}</strong> that I've worked on tagged <strong>{{tag.name}}</strong>.</p>
    </header>
    <div>
      <Project v-for="project in projects" :project="project" v-bind:key="project.slug" />
    </div>
  </div>
</template>

<script>
import { useStore } from '~/store'
export default {
  setup() {
    const store = useStore()
    return { store }
  },
  head() {
    const title = `${this.tag.name} by Derek Brooks`
    return {
      title,
      meta: this.$getMetaTags({ title, description: this.tag.description}),
    }
  },
  computed: {
    be() {
      return this.projects.length == 1 ? 'is' : 'are'
    },
    projectCount() {
      let text = `${this.projects.length} project`
      if (this.projects.length != 1) {
        text = `${text}s`
      }
      return text
    },
    projects() {
      return this.store.getProjectsTagged(this.$route.params.slug)
    },
    tag() {
      const tag = this.store.getTag(this.$route.params.slug)
      if (!tag) {
        this.$nuxt.context.error({
          status: 404,
          message: 'Tag not found',
        })
      }
      return tag
    }
  }
}
</script>

<style scoped>
p {
  white-space: pre-line;
}
</style>
