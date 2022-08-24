<template>
  <div>
    <header class="title">
      <h1>Tags</h1>
      <p>This is a word cloud of some technologies and tools that I've used while building the projects here. Select one to find out more about how I've used it.</p>
    </header>
    <div>
      <ul>
        <Tag v-for="tag in tags" v-bind:key="tag.slug" :tag="tag"></Tag>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from '~/store'

export default {
  setup() {
    const store = useStore()
    const projects = store.projects
    const tags = store.tags
    const minFontSize = 1
    const maxFontSize = 3

    
    tags.forEach((tag) => {
      const projectCount = store.getProjectsTagged(tag.slug).length
      tag.projectCount = projectCount
    })

    const projectCounts = tags.map(tag => tag.projectCount)
    // const highestCount = Math.max(...projectCounts)
    const meanCount = projectCounts.reduce((a, b) => a + b, 0) / projectCounts.length

    tags.forEach((tag) => {
      // let fontSize = (tag.projectCount / highestCount * maxFontSize).toFixed(2)
      let fontSize = (tag.projectCount / (meanCount * 2) * maxFontSize).toFixed(2)
      if (fontSize < minFontSize) {
        fontSize = minFontSize
      }
      if (fontSize > maxFontSize) {
        fontSize = maxFontSize
      }
      tag.fontSize = fontSize
    })

    return { tags }
  }
}
</script>

<style scoped>
  ul {
    display: block;
    line-height: 3rem;
    text-align: center;
  }

  li {
    display: inline-block;
    /* margin: 0.25rem 1rem; */
    white-space: nowrap;
  }
</style>