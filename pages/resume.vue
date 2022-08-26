<template>
  <div>
    <header class="title">
      <h1>Derek R. Brooks</h1>
      <section class="contact">
        <div class="address">
          Des Moines, Iowa<br>
          <a href="https://www.broox.com" title="Derek Brooks">www.broox.com</a>
        </div>
        <div class="info">
          <a href="mailto:derek@broox.com" title="E-mail Derek Brooks">derek@broox.com</a><br>
          1-951-282-7669
        </div>
      </section>
    </header>
  
    <section class="experience">
      <h2>Experience</h2>
      <article :class="job.slug" v-for="job in jobs" v-bind:key="job.slug">
        <header>
          <h3><strong>{{job.position}}</strong> for <strong>{{job.company}}</strong> of {{job.location}}</h3>
          <h4>{{job.timespan}}</h4>
        </header>
        <ul>
          <li v-for="task in job.tasks" v-bind:key="task">{{task}}</li>
        </ul>
      </article>
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
  }
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

article {
  margin: 1rem 0;
}

article header {
  margin: 0 0 1rem;
}

article h3 {
  font-size: 1.1em;
  font-weight: 400;
}

article h4 {
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

dl {
  column-gap: 1rem;
  display: grid;
  grid-template-columns: min-content 1fr;
  row-gap: 0.5rem;
}

dt {
  font-weight: 600;
}

strong { font-weight: 600; }

footer {
  color: #AAA;
  font-style: italic;
  margin: 3em 0 0;
  text-align: center;
}
</style>
