<template>
  <div id="about-container">
    <section id="side-nav">
      <nav>
        <li><a href="#OSM">OpenStreetMap</a></li>
        <li><a href="#StreetComplete">StreetComplete</a></li>
        <li><a href="#GoMap">GoMap!!</a></li>
      </nav>
    </section>
    <section id="content">
      <article id="OSM">
        <h3>OpenStreetMap</h3>
          <p>Our data comes from the OSM data base and will be updated on a regular bases/live feed.
            By contributing to OSM, you automatically contribute to our project as well.
            There a different ways to contribute to OSM:<br />
            You can either register directly following this link:
            <a href="https://wiki.openstreetmap.org/wiki/Getting_Involved">Create OSM account</a><br />
            You can also check out the OSM wiki for further info:
            <a href=https://www.openstreetmap.org/user/new>OSM Wiki</a><br />
            Or the Step to step OSM guide by
            <a href=https://learnosm.org/en>Learn OSM</a>!</p>
      </article>
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
          <article id="GoMap">
        <h3>GoMap!! (iOS)</h3>
          <p>This app can also be used to tag information with your mobile phone,
            but unlike streetcomplete, OSM knowledge and a OSM account is needed.
            After you set up your OSM account, you can follow this step by step guide to set up GoMap!! and start mapping.</p> 
            <p>The GoMap!! interface is a map with a cross in its center. </p>
            <p>You can simply add information to where the centered cross is by pressing the plus button.
            <img src="src/assets/gomap/1_1.png" alt="Screenshot 1" style="width:200px; height:300px;"></p>
            <p> You can either add attributes or add a hint. To add a tag, press attribute.
            <img src="src/assets/gomap/1_2.png" alt="Screenshot 2" style="width:200px; height:300px;"></p>
            <p>Add the key (Schlüssel) and its value (Wert). In this example i added a lowered kerb to a sidewalk and press save.
            <img src="src/assets/gomap/1_3.png" alt="Screenshot 3" style="width:200px; height:300px;"></p>
            <p>To upload the tag, press the cloud symbol in the downright corner.
            <img src="src/assets/gomap/1_4.png" alt="Screenshot 4" style="width:200px; height:300px;"></p>
            <p>Now add your commit comment and your source. Press upload.
            <img src="src/assets/gomap/1_5.png" alt="Screenshot 5" style="width:200px; height:300px"></p>
            <p>You just added information to OpenStreetMap!</p><br />
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
  list-style-type: none;
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
