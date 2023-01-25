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
      <article id="OSM">
        <h2>OpenStreetMap</h2>
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
        <br />
      </article>

      <article>
        <h2>StreetComplete Guide</h2>
        <p>
          Follow this guide to start mapping with StreetComplete on your Android
          phone.
        </p>
        <div class="galleryimg" id="StreetComplete">
          <img
            src="/src/assets/gomap/guideimageSC123.png"
            alt="Images to show how to use Streetcomplete"
            width="600"
            height="auto"
          />
          <div class="desc">
            Step 1: The GoMap!! interface is a map with a cross in its center.
            You can add information to the places where the cross is by pressing
            the + button. <br />
            Step 2: You can either add attributes or add a hint. To add a tag,
            press attribute. <br />
            Step 3: Add a key and its value, press save. In this example, the
            surface gravel was tagged. <br />
          </div>
        </div>

        <div class="galleryimg2">
          <img
            src="/src/assets/gomap/guideimageSC456X.png"
            alt="Images to show how to use Streetcomplete"
            width="600"
            height="auto"
          />
          <div class="desc">
            Step 4: The GoMap!! interface is a map with a cross in its center.
            You can add information to the places where the cross is by pressing
            the + button. <br />
            Step 5: You can either add attributes or add a hint. To add a tag,
            press attribute. <br />
            Step 6: Add a key and its value, press save. In this example, the
            surface gravel was tagged. <br />
          </div>
        </div>
      </article>

      <article>
        <h2>GoMap!! Guide</h2>
        <p>Follow this guide to start mapping with GoMap!! on your Iphone.</p>
        <div class="galleryimg" id="GoMap">
          <img
            src="/src/assets/gomap/guideimageStep123.png"
            alt="Images to show how to use GoMap!!"
            width="600"
            height="auto"
          />
          <div class="desc">
            Step 1: The GoMap!! interface is a map with a cross in its center.
            You can add information to the places where the cross is by pressing
            the + button. <br />
            Step 2: You can either add attributes or add a hint. To add a tag,
            press attribute. <br />
            Step 3: Add a key and its value, press save. In this example, the
            surface gravel was tagged. <br />
          </div>
        </div>

        <div class="galleryimg2">
          <img
            src="/src/assets/gomap/guideimageStep45.png"
            alt="Images to show how to use GoMap!!"
            width="600"
            height="auto"
          />
          <div class="desc">
            Step 4: To upload the tag press the cloud symbol in the downright
            corner. <br />
            Step 5: Now add your comment and source. Press upload. <br />
          </div>
        </div>
      </article>
    </section>

    <section id="sidebar">
      <aside>
        <h2>Useful Resources</h2>
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

@media (prefers-color-scheme: dark) {
  #header-img img {
    filter: grayscale(100%);
  }
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

@media screen and (min-width: 1800px) {
  #about-container {
    width: 70%;
  }
}

#sidebar {
  list-style-type: none;
  width: 30%;
  padding: 0 1rem;
}

#content {
  width: 70%;
  margin-right: 1rem;
  padding: 0 5rem;
}

article {
  border-bottom: 1px solid lightgray;
}
div.galleryimg {
  padding: 25px;
  margin-top: 10px;
  width: 80%;
  height: auto;
  position: relative;
}
div.galleryimg2 {
  padding: 25px;
  margin-top: 10px;
  width: 80%;
  height: auto;
  position: relative;
}
div.desc {
  padding: 5px;
  text-align: left;
  position: relative;
  width: 100%;
}
</style>
