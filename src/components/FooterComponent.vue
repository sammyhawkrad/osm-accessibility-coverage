<template>
  <footer class="footer">
    <div>
      <p>
        This project was created within the Cartography M.Sc. programme –
        proudly co-funded by the Erasmus+ Programme of the European Union
      </p>
      <div id="logos">
        <img src="/src/assets/tu-muenchen.png" alt="" />
        <img src="/src/assets/tu-wien.png" alt="" />
        <img src="/src/assets/tu-dresden.png" alt="" />
        <img src="/src/assets/utwente.png" alt="" />
        <img src="/src/assets/EU-flag-Erasmus-plus.png" alt="" />
        <img src="/src/assets/cartomaster-logo_400px.png" alt="" />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: rgb(190, 187, 187);
  padding: 3em;
  margin-top: 1rem;
}

#logos {
  display: flex;
  justify-content: space-between;
  height: 3rem;
  margin: 1rem 0;
}

@media screen and (max-width: 999px) {
  img {
    height: 2rem;
  }

  #logos {
    height: fit-content;
    justify-content: space-around;
    row-gap: 1.5rem;
    flex-wrap: wrap;
  }
}

@media (prefers-color-scheme: dark) {
  .footer {
    background-color: gray;
    color: black;
  }
}
</style>
