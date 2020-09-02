<template>
  <b-dropdown :text="selectedOption">
    <b-dropdown-item
      v-for="option in options"
      :key="option"
      @click="handleSelectedOption(option)"
      >{{ option }}</b-dropdown-item
    >
  </b-dropdown>
</template>

<script>
export default {
  name: "VDropDown",
  props: {
    selectedOption: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      deafult: function() {
        return [];
      },
    },
  },
  methods:{
      handleSelectedOption: function(option) {
          console.log(option)
          this.$emit('option-selected', option)
      }
  }
};
</script>
