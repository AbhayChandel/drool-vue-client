<template>
  <v-row class="justify-center title font-weight-regular align-center">
    <v-divider></v-divider> <span class="mx-3">{{ title }}</span>
    <v-divider></v-divider>
  </v-row>
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
