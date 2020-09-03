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
        @input="handleSearch"
        :placeholder="placeholderText"
      ></b-form-input>
    </div>
  </div>
</template>

<script>
import VDropDown from "./VDropDown";
import { mapActions, mapMutations } from "vuex";
export default {
  name: "TheSearchBar",
  components: {
    VDropDown,
  },
  methods: {
    ...mapActions([
      "fetchCocktailRecipesByName",
      "fetchCocktailRecipesByIngredient",
    ]),
    updateSearchBy: function(option) {
      this.searchBy = option;
    },
    handleSearch: function(value) {
      if (value.length > 3) {
        let action;
        switch (this.searchBy) {
          case "Ingredient":
            action = this.fetchCocktailRecipesByIngredient;
            break;
          case "Name":
            action = this.fetchCocktailRecipesByName;
            break;
          default:
            break;
        }
        action(value);
      }
    },
  },
  computed: {
    placeholderText: function() {
      return `search cocktail by ${this.searchBy}`;
    },
  },
  data: function() {
    const searchByOptions = ["Name", "Ingredient"];
    return {
      searchBy: searchByOptions[0],
      searchByOptions,
    };
  },
};
</script>
