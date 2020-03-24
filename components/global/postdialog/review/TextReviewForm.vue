<template>
  <div class="mt-2">
    <v-textarea
      outlined
      label="Detailed Review"
      placeholder="Write here..."
      class="mt-8 mb-0 pa-0"
      rows="10"
    ></v-textarea>
    <v-textarea
      auto-grow
      rows="1"
      name="reviewSummary"
      label="Review Summary"
      placeholder="in ten words or less..."
      counter="50"
      maxlength="50"
      class="pt-0 mt-0"
      validate-on-blur
    ></v-textarea>
  </div>
</template>

<script>
import ProductTagging from "../ProductTagging";
import Recommend from "./Recommend";
import SubmitReviewButton from "./SubmitReviewButton";

export default {
  components: {
    ProductTagging,
    Recommend,
    SubmitReviewButton
  },
  data: () => ({
    review: ""
  })
};
</script>
