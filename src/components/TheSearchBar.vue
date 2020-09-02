<template>
  <div class="row search-bar">
    <div class="col-4">
      <VDropDown
        :selectedOption="searchBy"
        :options="searchByOptions"
        @option-selected="updateSearchBy"
      />
    </div>
    <div class="col-8">
      <b-form-input
        v-model="input"
        :placeholder="placeholderText"
      ></b-form-input>
    </div>
  </div>
</template>

<script>
import VDropDown from "./VDropDown";
export default {
  name: "TheSearchBar",
  components: {
    VDropDown,
  },
  methods: {
    updateSearchBy: function(value) {
      console.log(value);
      this.searchBy = value;
    },
  },
  computed: {
      placeholderText: function(){
          return `search cocktail by ${this.searchBy}`
      }
  },
  data() {
    return {
      input: "",
      // default
      searchBy: "name",
      searchByOptions: ["name", "ingredient"],
    };
  },
};
</script>
