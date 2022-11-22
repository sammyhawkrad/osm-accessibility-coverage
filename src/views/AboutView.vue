<template>
  <body>
      <div id="div1" class="shadowbox"> 
        <section>
            <article>
              <h1>About this project</h1>
                <h2>Motivation</h2>
                  <p>For decades the problem of accessibility for people with disabilities to nearly all kinds of places within the built environment of cities has been a matter of public and scientific discussion.
                    Impaired people have difficulties participating in social life as they struggle to reach places due to infrastructure that was not built to serve them.
                    Therefore, traveling from one point to another takes much more time or is impossible (Gleeson, 1999; Tannert, Kirkham, Schöning, 2019).</p>
                  <p2>During a visit and talk with impaired people at the foundation “Pfennigparade” in Munich, a foundation that, amongst other things, operates a rehabilitation center for impaired people, it became obvious that information about accessibility is still scarce.
                    It was also mentioned that the available information is unequally distributed among the country.
                    Although there is quite some information about accessibility in the center of Munich, it is much harder to find such data in rural areas or even suburbs.
                    As a result, a trip to these places can be a difficult undertaking.
                    Another problem that was described is the updating of this information.
                    Sometimes, certain data is a few years old and not usable anymore.</p2>
                  <p3>The underlying problem of this lack of information seems to be that nobody has any responsibility to report important information and it is not centrally collected, as the people at Pfennigparade stated.
                    The city authorities do not report on this matter either. Consequently, it is also not possible to easily identify places where there is a lack of information and where there might be information.
                    Certainly, open-source projects like “wheelmap” try to solve this problem and collect information on accessibility, but these webpages are not made to raise awareness to data contributors or politicians to increase the pressure on them.
                    Therefore less covered places or less covered sectors within places stay hidden.</p3>
                  <p4>In summary, the unequally distributed information on accessibility and unavailable visualization of places with or without these data lead to a lack of knowledge and incentive on where to contribute with new data in open-source projects.</p4>
                <h3>The Heat Map</h3>
              </article>
        </section> 
      </div> 

      <div id="div2" class="shadowbox">
        <section>
          <h2>About the authors</h2>
            <article>
              <p>This is an about Page</p>
            </article>
        </section> 
      </div>
  </body>
</template>


<style scoped>
body {
  background-image: url('cartographyLogo.svg');
}

#div1 {
  width: 70%;
  float: left;
}

#div2 {
  width: 30%;
  float: right;
}

.shadowbox {
  border: 1px solid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
}

section {

}

article{

}

p {
  color: #26b72b;
}
</style>