<template>
  <v-container class="py-0 my-0">
    <v-row style="font-size:1.2rem" class="mb-2 mt-4 font-italic"
      >Product you will review today?</v-row
    >
    <ProductTaggingSingle />
    <v-row style="font-size:1.2rem" class="font-italic black--text">
      Type of review you will post?
    </v-row>
    <v-row>
      <v-radio-group
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

import ProductTaggingSingle from "../ProductTaggingSingle";
export default {
  components: {
    ProductTaggingSingle
  },
  data() {
    return {
      reviewType: "text"
    };
  },
  methods: {
    reviewTypeChanged() {
      this.setReviewType(this.reviewType);
    },
    ...mapMutations({
      setReviewType: "common/review/setReviewType"
    })
  }
};
</script>
