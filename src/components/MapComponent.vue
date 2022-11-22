<template>
  <div class="map">
    <iframe
      width="100%"
      height="100%"
      frameborder="0"
      allowfullscreen
      :src="src"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
  props: { src: String },
};
</script>

<style scoped>
.map {
  height: inherit;
}
</style>
