<template>
  <article>
    <header>
      <h1><NuxtLink :to="url">{{project.title}}</NuxtLink></h1>
      <span><time :datetime="project.updatedAt">{{displayTime}}</time></span>
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
  border-bottom: 1px solid #666;
  display: flex;
  justify-content: space-between;
  margin: 1.5em 0 0.5em;
  padding-bottom: 0.5em;
}

h1 {
  /* display: inline-block; */
  font-size: 1.5rem;
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
  font-size: 1em;
  margin-left: 1em;
  white-space: nowrap;
}

/*
Helper to align the timespan to the baseline of the *last* line of the project.title when the title wraps to more than 1 line.
Per CSS 2.1: The baseline of an 'inline-block' is the baseline of its last line box in the normal flow.
*/
h1 > a, span > time {
  display: inline-block;
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
}

ul li:not(:last-child):after {
  content: ', ';
}
</style>