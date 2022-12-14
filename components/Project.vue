<template>
  <article>
    <header>
      <h2><NuxtLink :to="url">{{project.title}}</NuxtLink></h2>
      <span><time :datetime="project.updatedAt">{{displayTime}}</time></span>
    </header>
    <ul v-if="tags">
      <li v-for="tag in tags" v-bind:key="tag.slug">
        <NuxtLink :to="`/tags/${tag.slug}/`">{{tag.name}}</NuxtLink>
      </li>
    </ul>

    <div class="description">
      <Thumbnail :project="project" :version="latestVersion"/>
      <div v-html="project.description"></div>
    </div>

    <div v-if="latestVersion" class="latest">
      <h3>{{latestVersion.version}} - latest version</h3>
      <p v-html="latestVersion.description"></p>
    </div>

    <div v-if="previousVersions" class="previous">
      <h3 @click="toggleVersions" class="toggle">{{previousVersionCount}} <span></span></h3>
      <div class="versions">
        <Version :version="version" :project="project" v-for="version in previousVersions" v-bind:key="version.version" />
        <!-- <div v-for="version in previousVersions" v-bind:key="version.version">
          <h4>{{version.version}} <span>{{$getDisplayDate(version.createdAt)}}</span></h4>
          <p v-html="version.description"></p>
        </div> -->
      </div>
    </div>

    <footer>
      <a :href="project.url" target="_blank" v-if="project.url">{{project.url}}</a>
    </footer>
  </article>
</template>

<script>
import { useStore } from '~/store'

export default {
  setup() {
    const store = useStore()
    return { store }
  },
  props: {
    project: Object,
  },
  data() {
    return {
      images: [],
    }
  },
  computed: {
    displayTime() {
      return this.$getDisplayDate(this.project.updatedAt)
    },
    latestVersion() {
      const versions = this.project.versions
      if (versions) {
        return versions[versions.length - 1]
      }
    },
    previousVersionCount() {
      let title = `${this.previousVersions.length} previous version`
      if (this.previousVersions.length > 1) {
        title = `${title}s`
      }
      return title
    },
    previousVersions() {
      const versions = [...this.project.versions]
      if (versions.length > 1) {
        return versions.slice(0, -1).reverse()
      }
    },
    tags() {
      const tags = []
      this.project.tags.forEach((tag) => {
        tags.push(this.store.getTag(tag))
      })
      return tags
    },
    url() {
      return `/projects/${this.project.slug}/`
    }
  },
  methods: {
    toggleVersions(event) {
      const parent = event.target.closest('.previous')
      const versions = parent.querySelector('.versions')
      const expanded = 'expanded'

      if (parent.classList.contains(expanded)) {
        parent.classList.remove(expanded)
        versions.style.height = '0px'
      } else {
        parent.classList.add(expanded)
        versions.style.height = `${versions.scrollHeight}px`
      }
    }
  }
}
</script>

<style scoped>
header {
  align-items: baseline;
  background-color: #fff;
  border-bottom: 1px solid #666;
  display: flex;
  justify-content: space-between;
  margin: 1.5em 0 0.5em;
  padding-bottom: 0.5em;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
}

h2 a {
  color: black;
}

h2 a:hover {
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
h2 > a, span > time {
  display: inline-block;
}

div {
  white-space: pre-line;
}

ul {
  display: inline-flex;
  flex-flow: row wrap;
  margin: 0;
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

.description {
  margin: 1em 0;
}

.latest {
  margin: 1em 0;
}

.previous {
  margin: 1em 0 0;
}

h3 {
  font-size: 1em;
  font-weight: 500;
  margin: 1em 0;
}

h3.toggle {
  color: #777;
  cursor: pointer;
  margin: 0;
  position: relative;
}

h3.toggle span {
  display: inline-block;
  margin-left: 0.25em;
  transition: all 0.2s ease-in-out;

  width: 0;
  height: 0;
  border-style: solid;
  border-width: .25em 0 .25em .5em;
  border-color: transparent transparent transparent #777;
}

.versions {
  border-left: 2px solid #DDD;
  height: 0px;
  margin: 1em 0 0 0.25em;
  overflow-y: hidden;
  padding-left: 1.5em;
  transition: all 0.3s ease-in-out;
}

.expanded {
  margin-bottom: 1em;
}

.expanded h3 span {
  transform: rotate(90deg);
}

p {
  margin: 1em 0;
}

footer {
  margin: 0;
}

footer::after {
  content: "";
  clear: both;
  display: table;
}
</style>
