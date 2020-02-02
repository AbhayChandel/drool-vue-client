<template>
  <div>
    <span>Recommendation</span>
    <v-divider class="mb-4"></v-divider>
    <v-btn-toggle
      id="recommendationBtnGroup"
      borderless
      dense
      group
      class="d-flex flex-row flex-wrap"
      v-model="recommendation"
    >
      <v-btn active-class="dnrSelected" class="pa-0 ma-0 pr-2 mr-sm-4 mr-md-6">
        <v-icon right class="mr-2">mdi-close</v-icon>
        <span>Do Not Recommend</span>
      </v-btn>
      <v-btn active-class="rSelected" class="pa-0 ma-0 pr-2 mr-sm-4 mr-md-6">
        <v-icon right class="mr-1">mdi-check</v-icon>
        <span>Recommend</span>
      </v-btn>
      <v-btn active-class="srSelected" class="pa-0 ma-0 pr-2 mr-sm-4 mr-md-6">
        <v-icon right class="mr-1">mdi-check-all</v-icon>
        <span>Strongly Recommend</span>
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendation: []
    };
  }
};
</script>

<style>
#recommendationBtnGroup .v-btn {
  text-transform: none;
}

#recommendationBtnGroup .dnrSelected {
  background-color: #ef9a9a !important;
}
#recommendationBtnGroup .rSelected {
  background-color: #dcedc8 !important;
}
#recommendationBtnGroup .srSelected {
  background-color: #a5d6a7 !important;
}
</style>
