<template>
  <div id="header-img">
    <picture>
      <source
        srcset="/public/munich-light-large.png"
        media="(min-width: 1400px)"
      />
      <img src="/public/munich-light-normal.png" alt="Map of Munich" />
    </picture>
  </div>
  <div id="about-container">
    <section id="content">
      <article id="background">
        <h2>Why did we map Accessibility?</h2>
        <p>
          People with disabilities struggle to participate in many facets of
          life and have trouble getting around because the infrastructure is not
          designed with them in mind. Without information regarding a location's
          accessibility it is even harder to participate in social activities.
          We discussed the mapping of accessibility data with the foundation
          Pfennigparade in Munich and one observation was the uneven
          distribution of available data on accessibility. In Munich's city
          centre there is a lot of data in comparison to rural or even suburban
          locations. We identified three main challenges in regard to this
          topic:
        </p>
        <ol>
          <li>
            Information about accessibility is still scarce and unequally
            distributed on every scale
          </li>
          <li>
            No central authority in charge of distributing and maintaining data
          </li>
          <li>Difficult to contribute and map data where it is needed</li>
        </ol>
        <p>We want to improve the situation and aim to:</p>
        <ul>
          <li>
            Raise awareness to regions, cities, districts and locations where
            there is little data on accessibility
          </li>
          <li>
            Give incentive to contribute information to little covered areas
          </li>
        </ul>
      </article>

      <article id="approach">
        <h2>Approach</h2>
        <p>
          This project is based on OpenSource resources. We believe that it
          suits this project the most because it has multiple advantages:
        </p>
        <ul>
          <li>Only centralized database with information on a global scale</li>
          <li>Independent of any another institution</li>
          <li>Information can be added (Key aim)</li>
          <li>Combination with other open-source projects</li>
        </ul>
      </article>

      <article id="workflow">
        <h2>Workflow</h2>
        <p>
          <img
            id="workflow"
            src="/gomap/workflow.png"
            alt="Image that shows the workflow"
            width="600"
            height="auto"
          />
        </p>
      </article>

      <article id="themap">
        <h2>How to use the Map</h2>
        <p>
          This text shall provide a short explanation of how to use the map in
          case you are new to Umap.
        </p>
        <br />
        <h3>The Layout:</h3>
        <p>
          The map is by default a standard web map that is centered to Northern
          France. You can either use it in light or dark mode. When you zoom
          into an area of your choice, one layer will be displayed by default.
          The data is displayed from zoom level 14, that is, zooming close to
          the community level. The defined zoom level is a compromise between
          overview of the data and loading capabilities with an average internet
          connection. The colour scheme you see is the default setting of Umap:
          A place with little available data is displayed as blue while changing
          to green, yellow and eventually red with increasing number of data
          points. The colour is not connected to quality of the data, meaning
          that red only means there is a lot of data and not that a place is
          more/less accessible or inaccessible. Places with no information stay
          white/dark.
        </p>
        <p>
          Most of the navigation bar functions are straight forward. If you want
          to activate or deactivate a layer, you open the See data Layers pan
          and click on the eye symbol of the layer you are interested in. Next
          to it you will find a zoom icon, which does not work in this
          configuration of the map, as it is not possible to zoom on all the
          information a layer provides.
        </p>
        <br />
        <h3>Home:</h3>
        <p>
          The map displayed on Home, shows all the data points we collected
          regarding accessibility and inaccessibility. It is categorised by
          objects, e.g. buildings, crossing, etc. These categories are also the
          Layers of the map, which you can activate and deactivate.
        </p>
        <br />
        <h3>Accessible/Inaccessible Places:</h3>
        <p>
          This map displays all the data that we connected to either accessible
          OR inaccessible places. The information is categorised by impairments,
          e.g., visual, deaf or mobility impairment.
        </p>
      </article>

      <article id="databehindmap">
        <h2>The data behind the map</h2>
        <p>
          The tags of our data collection is based on the following criteria to
          assure quality and relevance of our data:
        </p>
        <ul>
          <li>The tag is named in the OSM Wiki.</li>
          <li>The tag is used in a related project.</li>
          <li>
            The tag is frequently used: 0,05 % of all related tags according to
            TagInfo
          </li>
          <li>
            The tag can be identified as either accessible or inaccessible.
          </li>
        </ul>
        <p>
          We decided to work with 3 categories of impairment because all the
          tags we found were related to these. Other disabilities could not be
          connected to the identified tags. You can find the breakdown of tags
          and layers
          <a href="src\assets\taglist310123.pdf" download="taglist">here</a>.
        </p>
        <br />
        Follow this link to the
        <a href="https://github.com/sammyhawkrad/osm-accessibility-coverage"
          >GitHub repository.</a
        >
      </article>
    </section>
    <section id="sidebar">
      <aside>
        <h2>About the developers</h2>
        <p>
          This website was developed by Lennart Kerl and Samuel Darkwah Manu as
          their Mapping Project in the first semester of the
          <a
            href="https://cartographymaster.eu/"
            target="_blank"
            rel="noopener noreferrer"
            >International Master of Science in Cartography</a
          >
          (<a
            href="https://cartographymaster.eu/category/intakes/12th-intake/"
            target="_blank"
            rel="noopener noreferrer"
            >12th intake</a
          >).
        </p>
        <div class="profile">
          <figure>
            <img src="" alt="Picture of Lennart Kerl" />
            <figcaption>Lennart Kerl</figcaption>
          </figure>
        </div>
        <div class="profile">
          <figure>
            <img
              src="/src/assets/sam.jpg"
              alt="Picture of Samuel Darkwah Manu"
            />
            <figcaption>Samuel Darkwah Manu</figcaption>
          </figure>
        </div>
      </aside>
    </section>
  </div>
</template>

<style scoped>
#header-img {
  height: 300px;
  width: 100%;
  contain: strict;
}

#about-container {
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

#sidebar {
  list-style-type: none;
  width: 30%;
}

aside {
  background-color: #e8e2dc;
  padding: 1rem;
}

aside img {
  width: 100%;
  height: 330px;
}

figcaption {
  text-align: center;
}

aside > * {
  margin-bottom: 1rem;
}

#content {
  width: 70%;
  margin-right: 1rem;
  padding: 0 5rem;
}

h2 {
  border-bottom: 2px solid lightgreen;
  margin-bottom: 1.5rem;
}

article {
  margin-bottom: 3rem;
}

ol {
  padding-top: 5px;
  margin-bottom: 5px;
  text-align: justify;
  list-style-type: decimal;
}

ul {
  margin-top: 5px;
  text-align: justify;
  list-style-type: circle;
}

@media screen and (min-width: 1800px) {
  #about-container {
    width: 70%;
  }

  aside img {
    width: auto;
    height: 500px;
  }
}

@media (prefers-color-scheme: dark) {
  img {
    filter: grayscale(100%);
  }

  aside {
    background-color: #e2e2e2;
    color: black;
  }
}
</style>
