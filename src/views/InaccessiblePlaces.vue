<script setup>
import MapComponent from "../components/MapComponent.vue";
import { ref, onMounted } from "vue";

const src = ref("http://u.osmfr.org/m/849980/");
const src_dark = ref("");

const dark = ref(false);

onMounted(() => {
  let dark_mode = window.matchMedia("(prefers-color-scheme: dark)");
  if (dark_mode.matches) {
    dark.value = true;
  }

  dark_mode.onchange = (e) => {
    if (e.matches) {
      dark.value = true;
    } else {
      dark.value = false;
    }
  };
});
</script>

<template>
  <MapComponent :src="!dark ? src : src_dark" />
</template>
