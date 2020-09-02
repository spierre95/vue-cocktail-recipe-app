import Vue from "vue";
import axios from 'axios'
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    fetching: false,
  },
  mutations: {},
  actions: {
    fetchCocktailRecipesByName({}, input) {
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php", {
          params: {
            "s": input,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {});
    },
    fetchCocktailRecipesByIngredient({}, input) {
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php", {
          params: {
            "i": input,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {});
    },
  },
  getters: {},
});
