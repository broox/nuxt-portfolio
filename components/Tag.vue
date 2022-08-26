<template>
  <li :style="style">
    <NuxtLink :to="url" :title="title">{{tag.name}}</NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    tag: Object,
  },
  computed: {
    style() {
      return `font-size: ${this.tag.fontSize}em`
    },
    title() {
      let title = `${this.tag.projectCount} project`
      if (this.tag.projectCount != 1) {
        title = `${title}s`
      }
      return title
    },
    url() {
      return `/tags/${this.tag.slug}`
    }
  }
}
</script>

<style scoped>
  a {
    padding: 0.5rem;
  }
  a:hover {
    background-color: rgb(37, 99, 235);
    border-radius: 0.25em;
    color: white;
  }
</style>
