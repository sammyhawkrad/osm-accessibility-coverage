<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1>OSM Accessibility Coverage</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/accessible-places">Accessible Places</RouterLink>
      <RouterLink to="/inaccessible-places">Inaccessible Places</RouterLink>
      <RouterLink to="/how-to-help">How to Help</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  align-items: center;
  place-items: center;
  padding: 0 2rem;
  box-shadow: 1px 1px 5px gray;
  position: fixed;
  top: 0;
  background: var(--color-background);
  height: 4rem;
  width: 100%;
  z-index: 5;
}

h1 {
  font-size: 1.2rem;
}

nav {
  font-size: 12px;
  text-align: center;
  padding: 1rem;
  text-align: right;
  font-size: 1rem;
  flex-grow: 2;
}

main {
  width: 100%;
  position: absolute;
  top: 4rem;
  bottom: 0;
  height: calc(100vh - 4rem);
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  /* border-left: 1px solid var(--color-border); */
}

nav a:first-of-type {
  border: 0;
}

@media screen and (max-width: 999px) {
  header {
    display: block;
    height: 16rem;
    padding-top: 10px;
    text-align: center;
  }

  nav {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  main {
    top: 16rem;
    height: calc(100vh - 16rem);
  }
}
</style>
