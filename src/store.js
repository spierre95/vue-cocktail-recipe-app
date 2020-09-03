import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    fetching: false,
    drinks: []
  },
  mutations: {
    updateDrinkSearchResults(state, payload){
        Vue.set(state, 'drinks', payload)
    }
  },
  actions: {
    fetchCocktailRecipesByName({ commit }, input) {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php", {
          params: {
            s: input,
          },
        })
        .then((res) => {
          const data = res.data.drinks.map((drink) => {
            const {
              dateModified,
              idDrink,
              strAlcoholic,
              strCategory,
              strCreativeCommonsConfirmed,
              strDrink,
              strDrinkThumb,
            } = drink;
            return {
              dateModified,
              idDrink,
              strAlcoholic,
              strCategory,
              strCreativeCommonsConfirmed,
              strDrink,
              strDrinkThumb,
            };
          });
          commit('updateDrinkSearchResults', data)
        })
        .catch((error) => console.error(error));
    },
    fetchCocktailRecipesByIngredient({ commit }, input) {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php", {
          params: {
            i: input,
          },
        })
        .then((res) => {
          const data = res.data.drinks;
          commit('updateDrinkSearchResults', data)
        })
        .catch((res) => {});
    },
  },
  getters: {},
});
