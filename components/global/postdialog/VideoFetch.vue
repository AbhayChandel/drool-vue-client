<template>
  <div id="videoFetchContainer">
    <v-text-field
      light
      hide-details="auto"
      label="YouTube Video Link"
      placeholder="Paste your link here..."
      outlined
      class="pa-0 ma-0 mb-2"
    ></v-text-field>
    <v-btn small :loading="showLoading"
      ><v-icon class="mr-2">mdi-cloud-download</v-icon><span>Add</span></v-btn
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    showLoading: false
  })
};
</script>

<style scoped>
#videoFetchContainer .v-btn {
  text-transform: none;
}
</style>
