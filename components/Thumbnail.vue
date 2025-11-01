<template>
  <a
    v-if="hasImage"
    :href="img"
    @click.prevent="showScreenshot"
  >
    <img
      :src="thumbnail"
      :alt="alt"
      loading="lazy"
    />
  </a>
</template>

<script setup>
import * as basicLightbox from 'basiclightbox'

const props = defineProps({
  project: Object,
  version: Object
})

// Create a manifest of all available images at build time
const imageManifest = import.meta.glob('/public/images/*.png')
const thumbManifest = import.meta.glob('/public/images/thumb/*.gif')

const alt = computed(() => `Screenshot of ${props.project.title}`)

const imgPath = computed(() => {
  if (props.version) {
    return `${props.project.slug}-${props.version.version}.png`
  } else {
    return `${props.project.slug}.png`
  }
})

const thumbnailPath = computed(() => {
  if (props.version) {
    return `${props.project.slug}-${props.version.version}.gif`
  } else {
    return `${props.project.slug}.gif`
  }
})

const img = computed(() => `/images/${imgPath.value}`)
const thumbnail = computed(() => `/images/thumb/${thumbnailPath.value}`)

// Check if both the main image and thumbnail exist at build time
const hasImage = computed(() => {
  const imgExists = `/public/images/${imgPath.value}` in imageManifest
  const thumbExists = `/public/images/thumb/${thumbnailPath.value}` in thumbManifest
  return imgExists && thumbExists
})

const showScreenshot = () => {
  const instance = basicLightbox.create(`<img src="${img.value}"/>`)
  instance.show()
}
</script>

<style scoped>
img {
  border: 1px solid #DDD;
  border-radius: 0.25em;
  height: auto;
  float: left;
  max-width: 150px;
  margin: 0 1em 1em 0;
}
</style>
