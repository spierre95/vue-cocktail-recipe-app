<template>
  <div id="app">
    <TheHeader />
    <div class="pt-3 pb-3 container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>
