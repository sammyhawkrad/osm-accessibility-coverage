<template>
  <div id="about-container">
    <section id="side-nav">
      <nav>
        <a href="#OSM"><li id="navli">OpenStreetMap</li></a>
        <a href="#StreetComplete"><li id="navli">StreetComplete</li></a>
        <a href="#GoMap"><li id="navli">GoMap!!</li></a>
      </nav>
    </section>
    <section id="content">
      <article id="OSM">
        <h2>OpenStreetMap</h2>
        <h3>OpenStreetMap</h3>
        <p>
          Our data comes from the OSM data base and will be updated on a regular
          bases/live feed. By contributing to OSM, you automatically contribute
          to our project as well. There a different ways to contribute to
          OSM:<br />
          You can either register directly following this link:
          <a href="https://wiki.openstreetmap.org/wiki/Getting_Involved"
            >Create OSM account</a
          ><br />
          You can also check out the OSM wiki for further info:
          <a href="https://www.openstreetmap.org/user/new">OSM Wiki</a><br />
          Or the Step to step OSM guide by
          <a href="https://learnosm.org/en">Learn OSM</a>!
        </p>
      </article>
    <article>
      <div class="galleryimg" id="Streetcomplete"><h2>StreetComplete Guide</h2>
          <img src= "/src/assets/gomap/guideimageSC.png" alt="Images to show how to use Streetcomplete" width="600" height="auto">
      </div>

      <div class="galleryimg" id="GoMap"><h2>GoMap!! Guide</h2>
          <img src= "/src/assets/gomap/guideimageblack.png" alt="Images to show how to use GoMap!!" width="600" height="auto">
          
        <div class="desc">Step 1: The GoMap!! interface is a map with a cross in its center. 
        You can add information to the places where the cross is by pressing the + button. <br />
        Step 2: You can either add attributes or add a hint. To add a tag, press attribute. <br />
        Step 3: Add a key and its value, press save. In this example, the surface gravel was tagged. <br />
        </div>
      </div>
      <div class="galleryimg" id="GoMap"><h2>GoMap!! Guide</h2>
          <img src= "/src/assets/gomap/guideimageblack.png" alt="Images to show how to use GoMap!!" width="600" height="auto">
          
        <div class="desc">Step 4: The GoMap!! interface is a map with a cross in its center. 
        You can add information to the places where the cross is by pressing the + button. <br />
        Step 4: You can either add attributes or add a hint. To add a tag, press attribute. <br />
        </div>
      </div>
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
  position: relative;
}

#side-nav {
  list-style-type: none;
  width: 20%;
  text-align: right;
  position: fixed;
  top: 8rem;
  left: 1rem;
}

#navli {
  list-style-type: none;
  margin: 1rem;
  padding: 5px;
  border-bottom: 1px solid lightgray;
}

@media (prefers-color-scheme: dark) {
  #navli {
    border-bottom: 1px solid gray;
  }
}

#content {
  width: 80%;
  margin-left: 15rem;
}

div.galleryimg {
  padding: 50px;
  margin-top: 10px;
  margin-left: 5rem;
  width: 80%;
  height: auto;
  position: relative;
}

div.desc {
  padding: 15px;
  text-align: left;
  position: relative;
  top: 0;
}
</style>
