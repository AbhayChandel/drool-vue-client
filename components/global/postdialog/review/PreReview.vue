<template>
  <v-container class="py-0 my-0 px-0">
    <v-row style="font-size: 1.2rem;" class="mb-2 mt-4 pl-3 font-italic"
      >Product you will review today?</v-row
    >
    <ProductTagging />
    <v-row
      style="font-size: 1.2rem;"
      class="font-italic black--text pa-0 ma-0 mt-3"
    >
      Type of review you will post?
    </v-row>
    <v-row class="pa-0 ma-0">
      <v-radio-group
        hide-details
        v-model="reviewType"
        class="pt-0"
        mandatory
        @change="reviewTypeChanged(this)"
      >
        <v-radio label="Text" value="text"></v-radio>
        <v-radio label="Video" value="video"></v-radio>
      </v-radio-group>
    </v-row>
  </v-container>
</template>
<script>
import { mapMutations } from "vuex";

import ProductTagging from "../ProductTagging";
export default {
  components: {
    ProductTagging,
  },
  data() {
    return {
      reviewType: "text",
    };
  },
  methods: {
    reviewTypeChanged() {
      this.setReviewType(this.reviewType);
    },
    ...mapMutations({
      setReviewType: "common/review/setReviewType",
    }),
  },
};
</script>
