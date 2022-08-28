<template>
  <div>
    <header class="title">
      <h1>Hi, I'm Derek</h1>
      <img class="large" src="~/assets/images/derek-brooks.jpeg" alt="Derek Brooks"/>
      <h2>Professional tech lead, software engineer, and product architect.</h2>
      <h3>Amateur carpenter, photographer, and pizza maker.</h3>
      <img class="mobile" src="~/assets/images/derek-brooks.jpeg" alt="Derek Brooks"/>
      <p>I've built software and teams for startups, small businesses, and Fortune 100 companies.</p>
      <p>I've been through an exit as a founding engineer and was a lead engineer on President Obama's winning re-election campaign.</p>
      <p>Below, are <strong>{{featuredProjects.length}} projects</strong> that I've been particularly excited to work on.</p>
    </header>
    <div>
      <Project v-for="project in featuredProjects" :project="project" v-bind:key="project.slug" />
    </div>
  </div>
</template>

<script>
import { useStore } from '~/store'

export default {
  setup() {
    const store = useStore()
    return { store }
  },
  computed: {
    featuredProjects() {
      return this.store.featuredProjects
    }
  },
}
</script>

<style scoped>
  img {
    border-radius: 0.5em;
  }

  img.large {
    display: none;
  }

  img.mobile {
    display: block;
    margin: 1em auto;
    max-height: 100%;
    max-width: 100%;
  }

  @media (min-width: 768px) {
    header::after {
      content: "";
      clear: both;
      display: table;
    }
    img.large {
      display: block;
      width: 242px;
      height: 320px;
      margin-left: 1em;
      max-height: 100%;
      max-width: 100%;
      float: right;
    }
    img.mobile {
      display: none;
    }
  }
</style>