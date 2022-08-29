<template>
  <div>
    <header class="title">
      <h1>Derek R. Brooks</h1>
      <div class="contact">
        <div class="address">
          Des Moines, Iowa<br>
          <a href="https://www.broox.com" title="Derek Brooks">www.broox.com</a>
        </div>
        <div class="info">
          <a href="mailto:derek@broox.com" title="E-mail Derek Brooks">derek@broox.com</a><br>
          1-951-282-7669
        </div>
      </div>
    </header>
  
    <section class="experience">
      <h2>Experience</h2>
      <Job v-for="job in jobs" :job="job" v-bind:key="job.slug" />
    </section>
  
    <section class="skills">
      <h2>Skills</h2>
      <dl>
        <dt>Development:</dt>
        <dd>Python, Javascript, Ruby on Rails, PHP, Objective-C, Java, C#, ActionScript, ASP, ASP.NET, PowerScript, SQL, VBScript</dd>
        
        <dt>Platforms:</dt>
        <dd>MacOS, Linux, Windows</dd>
        
        <dt>Databases:</dt>
        <dd>MySQL, Mongo, Oracle, Sybase</dd>
        
        <dt>Markup:</dt>
        <dd>HTML, XML, CSS</dd>
      </dl>
    </section>

    <section class="education">
      <h2>Education</h2>
      <p>
        Bachelor of Arts, <strong>Computer Science</strong><br>
        Cornell College, Mount Vernon, Iowa<br>
        May 2003
      </p>
    </section>

    <footer>
      References available upon request
    </footer>
  </div>
</template>

<script>
import { useStore } from '~/store'

export default {
  setup() {
    const store = useStore()
    return { jobs: store.jobs }
  },
  head() {
    const title = 'Derek Brooks\'s Resume'
    return {
      title,
      meta: this.$getMetaTags({ title, })
    }
  },
}
</script>


<style scoped>
.contact {
  display: flex;
  justify-content: space-between;
}

.contact div {
  display: inline-block;
}
.contact .info {
  text-align: right;
}

section > h2 {
  color: #777;
  border-bottom: 1px solid;
  padding-bottom: 0.5em;
  font-size: 1.5em;
  margin: 1em 0 0.5em;
}

dl {
  column-gap: 1rem;
  display: grid;
  grid-template-columns: min-content 1fr;
  row-gap: 0.5rem;
}

dt {
  font-weight: 600;
}

footer {
  color: #AAA;
  font-style: italic;
  margin: 3em 0 0;
  text-align: center;
}

@media print {
  footer {
    display: none;
  }
}

</style>
