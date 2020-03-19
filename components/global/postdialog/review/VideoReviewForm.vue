<template>
  <div>
    <VideoFetch class="mb-6 mt-1" />
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
      outlined
      label="Video Description"
      placeholder="Add video description here..."
    ></v-textarea>
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
