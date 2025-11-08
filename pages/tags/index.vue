<template>
  <div>
    <header class="title">
      <h1>Tags</h1>
      <p>Here are some word clouds of skills, tools, and technologies that I've used over the years. Select one to learn more.</p>
    </header>

    <section class="tag-section featured-section">
      <h2>Current Focus</h2>
      <ul class="tags featured-tags">
        <Tag v-for="tag in featuredTags" :key="tag.slug" :tag="tag"></Tag>
      </ul>
    </section>

    <section class="tag-section all-tags-section">
      <h2>Other Experience</h2>
      <ul class="tags all-tags">
        <Tag v-for="tag in otherTags" :key="tag.slug" :tag="tag"></Tag>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { useStore } from '~/store'

const store = useStore()
const featuredTags = store.featuredTags
const otherTags = store.tags.filter(tag => !tag.featured)
const minFontSize = 1
const maxFontSize = 2

const allTags = [...featuredTags, ...otherTags]
allTags.forEach((tag) => {
  const projectCount = store.getProjectsTagged(tag.slug).length
  tag.projectCount = projectCount
})

const projectCounts = allTags.map(tag => tag.projectCount)
const meanCount = projectCounts.reduce((a, b) => a + b, 0) / projectCounts.length

allTags.forEach((tag) => {
  let fontSize = (tag.projectCount / (meanCount * 2) * maxFontSize).toFixed(2)
  if (fontSize < minFontSize) {
    fontSize = minFontSize
  }
  if (fontSize > maxFontSize) {
    fontSize = maxFontSize
  }
  tag.fontSize = fontSize
})

const title = 'Derek Brooks\'s Portfolio Tags'
usePageMeta({
  title,
  description: 'Skills, tools, and technologies that I\'ve used over the years.'
})
</script>

<style scoped>
  .tag-section {
    margin: 3rem 0 4rem;
    line-height: 3rem;
  }

  .tag-section h2 {
    border-bottom: 1px solid #666;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    padding: 0 0 0.5em;
  }

  .tags {
    display: block;
    line-height: 2rem;
    margin-top: 2rem;
    text-align: center;
  }

  .tags li {
    display: inline-block;
    white-space: nowrap;
  }
</style>
