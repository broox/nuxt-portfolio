<template>
  <div>
    <h4>{{version.version}} <span>{{displayTime}}</span></h4>
    <div>
      <a :href="img" v-if="img" @click.prevent="showScreenshot">
        <img :src="thumbnail"/>
      </a>
      <div v-html="version.description"></div>
      <div class="clear"/>
    </div>
  </div>
</template>

<script>
import { useStore } from '~/store'
import * as basicLightbox from 'basiclightbox'

export default {
  setup() {
    const store = useStore()
    const thumbnails = import.meta.globEager('~/assets/images/thumb/*.gif')
    const images = import.meta.globEager('~/assets/images/*')
    return { images, store, thumbnails }
  },
  props: {
    project: Object,
    version: Object,
  },
  computed: {
    displayTime() {
      return this.$getDisplayDate(this.version.createdAt)
    },
    img() {
      const keys = [
        `/assets/images/${this.project.slug}-${this.version.version}.png`,
        `/assets/images/${this.project.slug}-${this.version.version}.gif`
      ]

      for (const key of keys) {
        if (key in this.images) {
          return this.images[key].default
        }
      }
    },
    thumbnail() {
      const key = `/assets/images/thumb/${this.project.slug}-${this.version.version}.gif`
      if (key in this.thumbnails) {
        return this.thumbnails[key].default
      }
    },
  },
  methods: {
    showScreenshot() {
      const instance = basicLightbox.create(`<img src="${this.img}"/>`)
      instance.show()
    }
  }
}
</script>

<style scoped>
h4 {
  font-size: 1em;
  font-weight: 500;
  margin: 1em 0;
  position: relative;
}

h4 span {
  color: #777;
  font-weight: normal;
  position: absolute;
  right: 0;
}

img {
  border: 1px solid #000;
  float: left;
  margin: 0 1em 1em 0;
}

div {
  white-space: pre-line;
}

.clear {
  clear: both;
}
</style>
