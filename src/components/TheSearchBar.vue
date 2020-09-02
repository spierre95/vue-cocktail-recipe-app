<template>
  <div class="search-bar">
    <b-form-input v-model="input" placeholder="Enter your name"></b-form-input>
  </div>
</template>

<script>
export default {
  name: "TheSearchBar",
  data() {
    return {
      input: "",
    };
  },
};
</script>
