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
      <!-- <div id="StreetComplete-Container">   
      <article id="StreetComplete">
        <h2>Contribute with mobile</h2>
        <h3>StreetComplete (Android)</h3>
          <p>The streetcomplete app is the most convienient way of mapping data (at least we think so),
            since there is no specific OSM knowledge and no OSM registration needed.
            After downloading the app in the Play Store.
            The app interface shows locations on a map where information is missing ('questmarker')
            and you map the information by answering a question the app asks you,
            e.g. "What is the name of this street?"
            The app automatically uploads the information and tags them accordingly.</p><br />
          </article>
  </div> -->
      <!--<div id="GoMap">
          <article id="GoMap">
        <h3>GoMap!! (iOS)</h3>
          <p>This app can also be used to tag information with your mobile phone,
            but unlike streetcomplete, OSM knowledge and a OSM account is needed.
            After you set up your OSM account, you can follow this step by step guide to set up GoMap!! and start mapping.</p> 
            <p>The GoMap!! interface is a map with a cross in its center. </p>
            <p>You can simply add information to where the centered cross is by pressing the plus button.
            <img src="src/assets/gomap/1_1.PNG" alt="Screenshot 1" style="width:200px; height:300px;"></p>
            <p> You can either add attributes or add a hint. To add a tag, press attribute.
            <img src="src/assets/gomap/1_2.PNG" alt="Screenshot 2" style="width:200px; height:300px;"></p>
            <p>Add the key (Schlüssel) and its value (Wert). In this example i added a lowered kerb to a sidewalk and press save.
            <img src="src/assets/gomap/1_3.PNG" alt="Screenshot 3" style="width:200px; height:300px;"></p>
            <p>To upload the tag, press the cloud symbol in the downright corner.
            <img src="src/assets/gomap/1_4.PNG" alt="Screenshot 4" style="width:200px; height:300px;"></p>
            <p>Now add your commit comment and your source. Press upload.
            <img src="src/assets/gomap/1_5.PNG" alt="Screenshot 5" style="width:200px; height:300px"></p>
            <p>You just added information to OpenStreetMap!</p><br />
      </article>
  </div>-->
  
    <!--<div class="gallery1" id="StreetComplete"><h2>StreetComplete Guide</h2></div>
        <p>The streetcomplete app is the most convienient way of mapping data (at least we think so),
            since there is no specific OSM knowledge and no OSM registration needed.</p>-->
        
    <!--<div class="zoom">
      <a target="_blank" href="1_1.png">
          <img src="src/assets/gomap/guideimageSC.png" alt="GoMap Interface" width="200" height="auto">
      </a>
      <div class="desc1">The GoMap!! interface is a map with a cross in its center.
    You can simply add information to where the centered cross is by pressing the plus button.
      </div>
    </div>-->

    <!--<div class="gallery2" id="GoMap"><h2>GoMap!! Guide</h2>
        <p>This app can also be used to tag information with your mobile phone,
           but unlike streetcomplete, OSM knowledge and a OSM account is needed.
           After you set up your OSM account, you can follow this step by step guide to set up GoMap!! and start mapping.</p>-->
    
    <!--<div class="zoom">
      <a target="_blank" href="1_1.png">
          <img src="src/assets/gomap/guideimageblack.png" alt="GoMap Interface" width="200" height="auto">
      </a>
      <div class="desc1">The GoMap!! interface is a map with a cross in its center.
    You can simply add information to where the centered cross is by pressing the plus button.
      </div>
    </div>-->

    <div class="galleryimg" id="Streetcomplete"><h2>StreetComplete Guide</h2>
        <a target="_blank" href="guideimageSC.png">
          <img src= "/src/assets/gomap/guideimageSC.png" alt="Images to show how to use Streetcomplete" width="600" height="auto">
        </a>
    </div>

    <div class="galleryimg" id="GoMap"><h2>GoMap!! Guide</h2>
        <a target="_blank" href="guideimageblack.png">
          <img src= "/src/assets/gomap/guideimageblack.png" alt="Images to show how to use GoMap!!" width="600" height="auto">
        </a>
    </div>
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

div.gallery1 {
  margin-top: 5px;
  margin-left: 15rem;
  width: 80%;
  position: absolute;
  top: 15rem;
  bottom: 0;
}

div.gallery2 {
  margin-top: 5px;
  margin-left: 15rem;
  width: 80%;
  position: absolute;
  top: 20rem; /*might need to adapt this to new gallery*/
  bottom: 0;
}
div.zoom img{
  padding: 50px;
  position: relative;
  transition: transform .2s; /* Animation */
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

/*div.zoom:hover {
  transform: scale(1.5); (150% zoom - Note: if the zoom is too large, it will go outside of the viewport)
}*/

/*div.galleryimg:hover {
  border: 1px solid #777;
}*/

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
  position: absolute;
  top: 0;
  margin-left: 15rem;
  width: 50%;
}
</style>
