<template>
  <div class="row justify-content-center">
      <VCard
        v-for="result in searchResults"
        :key="result.idDrink"
        :title="result.strDrink"
        :imageUrl="result.strDrinkThumb"
        class="col-lg-4 col-md-6 col-sm-12"
      />
  </div>
</template>

<script>
import VCard from "../components/VCard";
import {mapState} from 'vuex';
export default {
  name: 'TheSearchPage',
  components: {
      VCard
  },
  computed: {
      ...mapState({
          searchResults: state => state.drinks
  })
  }
}
</script>
