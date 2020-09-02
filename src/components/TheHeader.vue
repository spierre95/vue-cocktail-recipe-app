<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="mx-auto">
        <TheSearchBar />
      </div>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://github.com/spierre95/vue-cocktail-recipe-app"
            >Github <span class="sr-only">(current)</span></a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import TheSearchBar from "./TheSearchBar";
export default {
  name: "TheHeader",
  components: {
    TheSearchBar,
  },
};
</script>
