<template>
  <body style="background-image: url('../assets/map.jpg');">
      <div id="div1" class="shadowbox"> 
        <section>
            <article>
              <h1>About this project</h1>
                <h3>Motivation</h3>
                  <p>Impaired people have difficulties participating many aspects of life as they struggle to reach places due to infrastructure that was not built to serve them<br>
                    Information about accessibility is still scarce and unequally distributed around the globe<br>
                    No central authority in charge of distributing data<br>
                    Difficult to contribute and map data where it is needed<br></p>
                <h3>Aim</h3>
                  <p>Raise awareness to locations where there is little data on accessibility<br>
                    Give incentive to contribute information to little covered areas<br></p>
                <h3>Approach</h3>
                  <p>Only centralized database with information<br>
                    Information can be added (Key aim)<br>
                    Independent of any another institution<br>
                    Combination with other open-source projects<br>
                    Add workflow graphic<br></p>
                <h3>Map Design</h3>
                  <p>Choice of Layers:<br>
                    Choice of color scheme:<br></p>
              </article>
        </section> 
      </div> 

      <div id="div2" class="shadowbox">
        <section>
          <h2>About the authors</h2>
            <article>
              <p>This is an about page</p>
              <img> XXX
            </article>
        </section> 
      </div>
  </body>
</template>

<style>

body {
  background-image: url('../assets/map.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
}

#div1 {
  box-sizing: border-box;
  width: 70%;
  float: left;
  text-align:left;
  background-color: transparent;
}

#div2 {
  width: 30%;
  float: right;
  text-align: left;
  background-color: transparent;
}

.shadowbox {
  border: 0.5px solid #333;
  box-shadow: 2px 2px 1px rgb(233, 229, 229);
  padding: 1px 1px;
  /*background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);*/
}

/*p {
  color: #26b72b;
}*/
</style>