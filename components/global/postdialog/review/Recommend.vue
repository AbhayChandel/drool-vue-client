<template>
  <div>
    <PageTitle title="Final Recommendation" class="mb-4 mt-2" />

    <v-btn-toggle
      id="recommendationBtnGroup"
      borderless
      dense
      group
      class="d-flex flex-row flex-wrap"
      v-model="recommendation"
    >
      <v-btn
        active-class="dnrSelected"
        class="pa-0 ma-0 pr-2 mr-sm-4 mr-md-6"
        @click="setRecommendation(0)"
      >
        <v-icon right class="mr-2">mdi-close</v-icon>
        <span>Do Not Recommend</span>
      </v-btn>
      <v-btn
        active-class="rSelected"
        class="pa-0 ma-0 pr-2 mr-sm-4 mr-md-6"
        @click="setRecommendation(1)"
      >
        <v-icon right class="mr-1">mdi-check</v-icon>
        <span>Recommend</span>
      </v-btn>
      <v-btn
        active-class="srSelected"
        class="pa-0 ma-0 pr-2 mr-sm-4 mr-md-6"
        @click="setRecommendation(2)"
      >
        <v-icon right class="mr-1">mdi-check-all</v-icon>
        <span>Strongly Recommend</span>
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import PageTitle from "./PageTitle";
export default {
  components: {
    PageTitle
  },
  methods: {
    ...mapMutations({
      setRecommendation: "common/review/setRecommendation"
    })
  },
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
  /* background-color: #ef9a9a !important; */
  /* background-color: #ec879b !important; */
  background-color: #fcfcfc !important;
  color: #e53935;
}
#recommendationBtnGroup .rSelected {
  /* background-color: #dcedc8 !important; */
  background-color: #fcfcfc !important;
  color: #ff9800;
}
#recommendationBtnGroup .srSelected {
  /* background-color: #a5d6a7 !important; */
  background-color: #fcfcfc !important;
  color: #4db6ac;
}
</style>
