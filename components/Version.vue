<template>
  <div>
    <h4>{{version.version}} <span>{{displayTime}}</span></h4>
    <div>
      <Thumbnail :project="project" :version="version"/>
      <div v-html="version.description"></div>
      <div class="clear"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
    version: Object,
  },
  computed: {
    displayTime() {
      return this.$getDisplayDate(this.version.createdAt)
    },
  },
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

div {
  white-space: pre-line;
}

.clear {
  clear: both;
}
</style>
