<script>
import MapComponent from "../components/MapComponent.vue";

export default {
  components: { MapComponent },
  data() {
    return {
      src: "http://u.osmfr.org/m/827744/",
    };
  },
};
</script>

<template>
  <MapComponent :src="src" />
</template>
