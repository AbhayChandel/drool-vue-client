<template>
  <div>
    <ProductTagging class="mb-6" />
    <VideoFetch class="mb-6" />
    <v-text-field
      light
      class="mb-6"
      label="Video Title"
      placeholder="Add video title here..."
      outlined
    ></v-text-field>
    <v-textarea
      light
      auto-grow
      class="mb-6"
      outlined
      label="Video Description"
      placeholder="Add video description here..."
    ></v-textarea>
    <Recommend class="mb-6" />
    <SubmitReviewButton class="mb-4" />
  </div>
</template>

<script>
import ProductTagging from "../ProductTagging";
import Recommend from "./Recommend";
import SubmitReviewButton from "./SubmitReviewButton";
import VideoFetch from "../VideoFetch";

export default {
  components: {
    ProductTagging,
    Recommend,
    SubmitReviewButton,
    VideoFetch
  },
  data: () => ({})
};
</script>
