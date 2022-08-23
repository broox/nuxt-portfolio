<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
* {
  box-sizing: border-box;
  line-height: 1.3em;
  margin: 0;
  padding: 0;
}

body {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

a {
  color: rgb(37 99 235);
  text-decoration: none;
}

header.title {
  margin: 2.5rem 0;
}

header.title h1 {
  color: #000;
  font-size: 2em;
  font-weight: 700;
  margin: 0.5em 0;
}

header.title h2 {
  color: #222;
  font-size: 1.5em;
  font-weight: 600;
  margin: 0.5em 0;
}

header.title h3 {
  color: #444;
  font-size: 1.25em;
  font-weight: 500;
  margin: 0.5em 0;
}

header.title p {
  margin: 1em 0;
}

</style>