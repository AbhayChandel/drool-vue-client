<template>
  <v-card-title class="pa-3 indigo--text text--darken-4">{{
    title
  }}</v-card-title>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
