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
            We identified three main challenges in regard to this topic:<br />
            <li>Information about accessibility is still scarce and unequally
                distributed on every scale</li>
            <li>No central authority in charge of distributing and maintaining data</li>
            <li>Difficult to contribute and map data where it is needed</li><br /></p>
        <h3>Aim</h3>
          <p>We decided that we want to create a heat map that shows areas with accessibility information
            to tackle the above mentioned issues.
            The heat map will display collected data from the OSM community with regards to different impairments and infrastructure.
            Please find a guide to our map under "The map".
            With this project we want to achieve two main goals: <br />
          <li>Raise awareness to regions, cities, districts and locations where there is little data on
          accessibility</li>
          <li>Give incentive to contribute information to little covered areas</li><br /></p>
      </article>
      <article id="approach">
        <h2>Approach</h2>
          <p> 
            This project is based on OpenSource resources.
			       We believe that it suits this project the most because it has multiple advantages: <br />
			      <li>Only centralized database with information on a global scale</li>
			      <li>Independent of any another institution</li>
			      <li>Information can be added (Key aim)</li>
			      <li>Combination with other open-source projects</li>
          </p>
        <h3>Workflow</h3>
          <p>Our workflow includes various steps.
			      We began by identifying the accessibility related tags in the OSM universe.
			      The tools we used for this are the tagInfo Website and the OSM Wiki. 
		      	After collecting about 40 tags, we categorized those into different categories.
			      The categroies are based on the accessibility meaning of a tag e.g. accessible, inaccessible or not clear.
			      Furthermore we sorted the tags by infrastructure/ what they describe e.g. streets, buildings, traffic signals etc.,
			      and in relation to the impairment e.g. mobility, deaf and visual impairment.
			      We are aware that the data is not complete and we might misinterpret it.
			      Further down you can find all the tags we currently use, if you have further tags to add, check out the "how to help" page.<br />
			      The data is extracted via OverpassTurbo and integrated into a uMap that we created for this purpose.
			      We created the website in the visual code editor using the vue.js framework.
			      You can find the link to our GitHub repository on the "how to help" page.</p>
          <p></p>
      </article>
        <article id="themap">
        <h2>The Map</h2>
        <p> This text is about why we chose a heat map, what it displays and how to use it <br />
          Choice of Layers:<br />
          Choice of color scheme:<br />
        </p>
      </article>
      <article id="taglist">
        <h2>List of tags</h2>
          <p>We publish the list of tags for transparency reasons.
            We know that we might have missed some other accessibility tags of the OSM universe.
            If you feel something is missing, please let us know via Github<br />
            The PDF will be updated as soon as new tags are integrated into the map.
            Download the <a href='src\assets\taglist310123.pdf' download="taglist">List of tags</a></p>
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

p{

}

h1{

}

h2{

}
</style>
