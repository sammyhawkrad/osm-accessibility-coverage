<template>
  <div id="about-container">
    <section id="side-nav">
      <nav>
        <a href="#background">Contribute with mobile</a>
      </nav>
    </section>
    <section id="content">
      <article id="background">
        <h2>Contribute with mobile</h2>
        <h3>StreetComplete (Android)</h3>
          <p>The streetcomplete app is the most convienient way of mapping data (at least we think so),
            since there is no specific OSM knowledge and no OSM registration needed.
            After downloading the app in the Play Store.
            The app interface shows locations on a map where information is missing ('questmarker')
            and you map the information by answering a question the app asks you,
            e.g. "What is the name of this street?"
            The app automatically uploads the information and tags them accordingly.</p><br />
        <h3>GoMap!! (iOS)</h3>
          <p>This app can also be used to tag information with your mobile phone,
            but unlike streetcomplete, OSM knowledge and a OSM account is needed.
            The GoMap!! interface is a map that centers on your current location.
            You can simply add information by pressing the plus button.
            The user has to assign names, OSM tags and furhter information to the tagged object.</p><br />
        <h3>OpenStreetMap</h3>
          <p>Our data comes from the OSM data base and will be updated on a regular bases/live feed.
            By contributing to OSM, you automatically contribute to our project as well.
            There a different ways to contribute to OSM:<br />
            You can either register directly following this link:
            <a href="https://wiki.openstreetmap.org/wiki/Getting_Involved">Create OSM account</a><br />
            You can also check out the OSM wiki for further info:
            <a href=https://www.openstreetmap.org/user/new>OSM Wiki</a></p>
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
