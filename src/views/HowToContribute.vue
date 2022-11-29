<template>
    <body>
        <div id="div1" class="shadowbox"> 
          <section>
              <article>
                <h1>How to contribute</h1>
                  <p></p>
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