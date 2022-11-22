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

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  place-items: center;
  padding-left: 1rem;
  box-shadow: 1px 1px 5px rgb(187, 187, 187);
  z-index: 5;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

h1 {
  font-size: 1.2rem;
}

nav {
  font-size: 12px;
  text-align: center;
  padding: 1.5rem;
  text-align: right;
  margin-left: -1rem;
  font-size: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  /* border-left: 1px solid var(--color-border); */
}

nav a:first-of-type {
  border: 0;
}
</style>
