<template>
  <a
    v-if="imgPath"
    :href="imgPath"
    @click.prevent="showScreenshot"
  >
    <img
      :src="thumbnailPath"
      :alt="alt"
      loading="lazy"
    />
  </a>
</template>

<script setup lang="ts">
import * as basicLightbox from 'basiclightbox'

const props = defineProps<{
  project: Project
  version?: ProjectVersion
}>()

const { imgPath, thumbnailPath } = useProjectImage(props.project, props.version)

const alt = computed(() => `Screenshot of ${props.project.title}`)

const showScreenshot = () => {
  if (imgPath.value) {
    const instance = basicLightbox.create(`<img src="${imgPath.value}"/>`)
    instance.show()
  }
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
