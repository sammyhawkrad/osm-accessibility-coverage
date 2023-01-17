<template>
  <div id="about-container">
    <section id="side-nav">
      <nav>
        <a href="#background"><li id="navli">Background</li></a>
        <a href="#approach"><li id="navli">Approach</li></a>
        <a href="#themap"><li id="navli">The Map</li></a>
        <a href="#taglist"><li id="navli">List of tags</li></a>
      </nav>
    </section>
    <section id="content">
      <article id="background">
       
        <h1>About this project</h1>
        
        <h2>Motivation</h2>
          <p>We went to the "Pfennigparade" foundation in Munich, which runs a rehabilitation facility for persons with disabilities,
            as part of a class assignment at the Technical University of Munich.
            People with disabilities generally struggle to participate in many facets of life
            and have trouble getting around because the infrastructure was not designed with them in mind.
            If there is no information regarding a location's accessibility, this is much harder.
            We discussed the mapping of accessibility data, and one observation from our tour
            was the lack of accessibility data and its uneven distribution.
            Even if there is quite a bit of accessibility data available,
            for instance in Munich's city centre, it is considerably more difficult to locate such information
            in rural or even suburban locations. 
            We identified three main challenges in regard to this topic:</p>
          <ol>
            <li>Information about accessibility is still scarce and unequally distributed on every scale</li>
            <li>No central authority in charge of distributing and maintaining data</li>
            <li>Difficult to contribute and map data where it is needed</li>
          </ol>
        
          <h3>Aim</h3>
          <p>We decided that we want to create a heat map that shows areas with accessibility information
            to tackle the above mentioned issues.
            The heat map will display collected data from the OSM community with regards to different impairments and infrastructure.
            Please find a guide to our map under "The map".
            With this project we want to achieve two main goals:</p>
          <ol>
            <li>Raise awareness to regions, cities, districts and locations where there is little data on
          accessibility</li>
          <li>Give incentive to contribute information to little covered areas</li>
        </ol>
      </article>
      
      <article id="approach">
        <h2>Approach</h2>
          <p> 
            This project is based on OpenSource resources.
			       We believe that it suits this project the most because it has multiple advantages:</p>
			     <ul>
            <li>Only centralized database with information on a global scale</li>
			      <li>Independent of any another institution</li>
			      <li>Information can be added (Key aim)</li>
			      <li>Combination with other open-source projects</li>
          </ul>

        <h3>Workflow</h3>
          <p>
            <img src= "/src/assets/gomap/workflow.png" alt="Image that shows the workflow" width="600" height="auto">
          </p>
      </article>
      
      <article id="themap">
        <h2>The Map</h2>
        <p>This text shall provide a short explanation of how to use the map in case you are new to Umap.<br />
            The Layout: The map can be divided into the map itself and its navigation bar.
            The map is by default a standard web map that is centered to Northern France.
            You can either use it in light or dark mode.
            When you zoom into an area of your choice, one layer will be displayed by default.
            The layer will be displayed from a certain zoom level on.
            The defined zoom level is a compromise between overview of the data and loading capabilities of an average CPU.
            The color scheme you see is the default setting of Umap.
            A place with little available data is displayed as blue while changing to green, yellow and red with increasing data points.
            Places with no information stay white/dark. </p><br />
            The navigation bar:
            <ul>
              <li>Zoom in +</li>
              <li>Zoom out</li>
              <li>Search a place name</li>
              <li>View Fullscreen</li>
              <li>See data Layers</li>
              <li>More controls</li>
              <li>Share</li>
            </ul>
          <p>
            Most of these functions are straight forward.
            If you want to activate or deactivate a layer,
            you open the See data Layers pan and click on the eye symbol of the layer you are interested in.
            Next to it you will find a zoom icon, which does not work in this configuration of the map,
            as it is not possible to zoom on all the information a layer provides. <br />
            Home: The map displayed on Home, shows all the data points we collected regarding accessibility and inaccessibility.
            It is categorized by objects, e.g. buildings, crossing, etc.
            These categories are also the Layers of the map, which you can activate and deactivate.<br />
            Accessible/Inaccessible Places:
            This map displays all the data that we connected to either accessible OR inaccessible places.
            The information is categorized by impairments, e.g., visual, deaf or mobility impairment.
        </p>
      </article>
      
      <article id="taglist">
        <h2>The data behind the map</h2>
          <p>
            Chosen OSM Tags: 
            The tags our data collection is based on the following criteria to assure quality and relevance of our data:</p>
            <ul>
              <li>The tag is named in the OSM Wiki.</li>
              <li>The tag is used in a related project.</li>
              <li>The tag is frequently used: 0,05 % of all related tags according to TagInfo</li>
              <li>The tag can be identified as either accessible or inaccessible.</li>
            </ul> 
          <p>Grouping of Layers:
            We decided to work with 3 categories of impairment because all the tags we found related to these.
            Other disabilities could not be connected to the identified tags.
            You can find the breakdown of tags and layers <a href='src\assets\taglist310123.pdf' download="taglist">here</a>.</p>
            <br />
            Follow this link to the <a href="https://github.com/sammyhawkrad/osm-accessibility-coverage">GitHub repository.</a>
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

#navli {
  list-style-type: none;
  margin: 1rem;
  padding-bottom: 5px;
  border-bottom: 1px solid lightgray;
}

#content {
  width: 80%;
  margin-left: 15rem;
}

img{
  padding: 5px;
  margin-left: 10rem;
}

p{
  text-align: justify;
}

ol {
  padding-top: 5px;
  text-align: justify;
  list-style-type: lower-alpha;
}

h1{

}
</style>
