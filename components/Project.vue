<template>
  <article>
    <header>
      <h1><NuxtLink :to="url">{{project.title}}</NuxtLink></h1>
      <time :datetime="project.updatedAt">{{displayTime}}</time>
    </header>
    <ul>
      <li v-for="tag in project.tags">
        <NuxtLink :to="'/tags/'+tag">{{tag}}</NuxtLink>
      </li>
    </ul>
    <div>{{project.description}}</div>
  </article>
</template>

<script>
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export default {
  props: {
    project: Object,
  },
  computed: {
    displayTime() {
      const updatedAt = this.project.updatedAt
      const date = new Date(updatedAt)
      if (updatedAt.length > 4) {
        const month = months[date.getUTCMonth()]
        return `${month} ${date.getUTCFullYear()}`
      } else {
        return date.getUTCFullYear()
      }
    },
    url() {
      return `/projects/${this.project.slug}`
    }
  }
}
</script>

<style scoped>
header {
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  margin: 1.5em 0 0.5em;
  padding-bottom: 0.5em;
  border-bottom: 1px solid #666;
}

h1 {
  /* display: inline; */
  font-size: 1.5em;
  font-weight: 600;
  margin: 0;
  padding: 0;
}

h1 a {
  color: black;
}

h1 a:hover {
  color: rgb(37 99 235);
}

time {
  color: #666;
  /* display: inline; */
  font-size: 1em;
}

div {
  white-space: pre-line;
}

ul {
  display: inline-flex;
  flex-flow: row wrap;
  margin: 0 0 1em;
  padding: 0;
}

ul li {
  display: block;
  justify-content: flex-start;
  list-style: none;
  white-space: pre-wrap;
  /* margin: 0 1em 1em 0; */
}

ul li:not(:last-child):after {
  content: ', ';
}
</style>