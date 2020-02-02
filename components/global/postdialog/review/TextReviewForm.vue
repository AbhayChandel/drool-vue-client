<template>
  <div>
    <ProductTagging />
    <v-textarea
      outlined
      label="Review"
      placeholder="Write your review here..."
      class="mt-8 mb-0 pa-0"
    ></v-textarea>
    <Recommend class="mb-6" />
    <SubmitReviewButton class="mb-4" />
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
