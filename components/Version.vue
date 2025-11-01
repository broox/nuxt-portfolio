<template>
  <div>
    <h4>{{ version.version }} <span>{{ displayTime }}</span></h4>
    <div>
      <Thumbnail :project="project" :version="version"/>
      <div v-html="version.description"></div>
      <div class="clear"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  project: Project
  version: ProjectVersion
}>()

const { $getDisplayDate } = useNuxtApp()

const displayTime = computed(() => $getDisplayDate(props.version.createdAt))
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

div {
  white-space: pre-line;
}

.clear {
  clear: both;
}
</style>
