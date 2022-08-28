<template>
  <div>
    <header>
      <div>
        <h1>The Portfolio of Derek Brooks</h1>
        <nav>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/projects/">Projects</NuxtLink></li>
            <li><NuxtLink to="/tags/">Tags</NuxtLink></li>
            <li><NuxtLink to="/resume/">Resume</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="content">
      <Nuxt />
    </div>
    <footer>
      <div>
        Copyright &copy; {{year}} Derek Brooks<br>
        <a href="https://github.com/broox/nuxt-portfolio" target="_blank">source code</a> &middot;
        <a :href="validateURL" target="_blank">valid markup</a>
      </div>
    </footer>
  </div>
</template>

<script>
import ogImage from '~/assets/images/derek-brooks.jpeg';
export default {
  head () {
    return {
      meta: [
        { hid: 'og:image', property: 'og:image', content: this.$config.baseURL + ogImage }
      ]
    }
  },
  data() {
    const validateURL = new URL('https://validator.w3.org/nu/')
    validateURL.searchParams.append('doc', this.$config.baseURL + this.$route.path)

    const year = new Date().getFullYear()
    return {
      year,
      validateURL
    }
  },
}
</script>

<style scoped>
header {
  position: sticky;
  background-color: #000;
  margin: 0;
  color: #fff;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
}

header div {
  padding: 1rem;
}

header nav a {
  color: #DDD;
  /* color: rgb(192, 211, 251); */
}

header nav a.nuxt-link-exact-active {
  color: white;
  font-weight: bold;
}

h1 {
  font-size: 1.5em;
  margin: 0 0 0.5rem;
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
  margin: 0 1rem 0 0;
}

div.content {
  padding: 0 1rem;
  word-wrap: break-word;
}

footer {
  color: #AAA;
  padding: 0 1rem;
  text-align: center;
}

footer div {
  border-top: 1px solid #DDD;
  margin: 2rem 0;
  padding-top: 2rem;
}

@media (min-width: 1024px) {
  header div {
    align-items: baseline;
    display: flex;
    justify-content: space-between;
  }

  header div, div.content, footer {
    margin: 0 auto;
    max-width: 1024px;
  }

  ul li {
    justify-content: flex-end;
    margin: 0 0 0 1em;
  }
}
</style>
