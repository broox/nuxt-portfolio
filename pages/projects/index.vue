<template>
  <div>
    <header class="title">
      <h1>Projects</h1>
      <p>Here's a rough list of <strong>{{projects.length}} projects</strong> that I've worked on over the past <strong>{{years}} years</strong>. Some projects have been omitted due to confidentiality concerns.</p>
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
    return { projects: store.projects }
  },
  head() {
    const title = 'Derek Brooks\'s Portfolio Projects'
    return {
      title,
      meta: this.$getMetaTags({
        title,
        description: `This is a rough list of ${this.projects.length} projects that I've worked on over the past ${this.years} years.` }),
    }
  },
  computed: {
    years() {
      const currentYear = new Date().getFullYear();
      const oldestProjectYear = this.projects.reduce(function(previous, current) {
        const previousProjectYear = new Date(previous.updatedAt).getUTCFullYear()
        const currentProjectYear = new Date(current.updatedAt).getUTCFullYear()
        return previousProjectYear < currentProjectYear ? previousProjectYear : currentProjectYear;
      });
      return currentYear - oldestProjectYear
    }
  }
}
</script>
