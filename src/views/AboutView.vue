<template>
  <div id="about-container">
    <section id="side-nav">
      <nav>
        <a href="#background">Background</a>
      </nav>
    </section>
    <section id="content">
      <article id="background">
        <h1>About this project</h1>
        <h2>Motivation</h2>
        <p>
          Impaired people have difficulties participating many aspects of life
          as they struggle to reach places due to infrastructure that was not
          built to serve them<br />
          Information about accessibility is still scarce and unequally
          distributed around the globe<br />
          No central authority in charge of distributing data<br />
          Difficult to contribute and map data where it is needed<br />
        </p>
        <h2>Aim</h2>
        <p>
          Raise awareness to locations where there is little data on
          accessibility<br />
          Give incentive to contribute information to little covered areas<br />
        </p>
        <h2>Approach</h2>
        <p>
          Only centralized database with information<br />
          Information can be added (Key aim)<br />
          Independent of any another institution<br />
          Combination with other open-source projects<br />
          Add workflow graphic<br />
        </p>
        <h2>Map Design</h2>
        <p>
          Choice of Layers:<br />
          Choice of color scheme:<br />
        </p>
      </article>
    </section>
  </div>
</template>

<style scoped>
#about-container {
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  margin: 3rem auto;
}

#side-nav {
  width: 20%;
  text-align: right;
  position: fixed;
  top: 8rem;
  left: 1rem;
}

#content {
  width: 80%;
  margin-left: 15rem;
}
</style>
