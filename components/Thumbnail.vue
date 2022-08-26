<template>
  <a :href="img" v-if="img" @click.prevent="showScreenshot">
    <img :src="thumbnail" v-if="thumbnail" :alt="alt"/>
  </a>
</template>

<script>
import * as basicLightbox from 'basiclightbox'

export default {
  props: {
    project: Object,
    version: Object,
  },
  computed: {
    alt() {
      return `Screenshot of ${this.project.title}`
    },
    img() {
      try {
        if (this.version) {
          return require(`~/assets/images/${this.project.slug}-${this.version.version}.png`)
        } else {
          return require(`~/assets/images/${this.project.slug}.png`)
        }
      } catch (e) {
        return null
      }
    },
    thumbnail() {
      try {
        if (this.version) {
          return require(`~/assets/images/thumb/${this.project.slug}-${this.version.version}.gif`)
        } else {
          return require(`~/assets/images/thumb/${this.project.slug}.gif`)
        }
      } catch (e) {
        return null
      }
    },
  },
  methods: {
    showScreenshot() {
      const instance = basicLightbox.create(`<img src="${this.img}"/>`)
      instance.show()
    },
  }
}
</script>

<style scoped>
img {
  border: 1px solid #000;
  float: left;
  margin: 0 1em 1em 0;
}
</style>
