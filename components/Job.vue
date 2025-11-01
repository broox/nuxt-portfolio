<template>
  <article :class="job.slug">
    <header>
      <h3><strong>{{ job.position }}</strong> for <strong>{{ job.company }}</strong> of {{ job.location }}</h3>
      <h4>{{ job.timespan }}</h4>
    </header>
    <ul>
      <li v-for="task in job.tasks" :key="task">{{ task }}</li>
      <li v-if="projects.length" class="projects">
        Projects:
        <span v-for="project in projects" :key="project.slug">
          <NuxtLink :to="`/projects/${project.slug}/`">{{ project.title }}</NuxtLink>
        </span>
      </li>
    </ul>
  </article>

</template>

<script setup>
import { useStore } from '~/store'

const props = defineProps({
  job: Object
})

const store = useStore()

const projects = computed(() => store.getProjectsForJob(props.job.slug).reverse())
</script>

<style scoped>
article {
  margin: 1rem 0;
}

article header {
  margin: 0 0 1rem;
}

article h3 {
  font-size: 1em;
  font-weight: 400;
}

article h4 {
  /* todo: lighter gray? */
  font-size: 1em;
  font-weight: normal;
}

article ul {
  margin-left: 2rem;
}

article li {
  list-style-type: square;
  margin: 0.5em 0;
}

li.projects span:not(:last-child):after {
  content: ', ';
}
</style>
