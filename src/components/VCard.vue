<template>
  <div>
    <b-card
      :title="title"
      :img-src="imageUrl"
      :img-alt="title"
      img-top
      tag="div"
      class="mb-3"
    >
      <b-card-text>
        {{description}}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "VCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
};
</script>
