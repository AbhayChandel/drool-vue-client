<template>
  <div style="width:100%">
    <ProductTagging class="mb-6" />
    <VideoFetch class="mb-6" />
    <v-text-field
      light
      class="mb-6"
      hide-details="auto"
      label="Video Title"
      placeholder="Add video title here..."
      outlined
    ></v-text-field>
    <v-textarea
      light
      auto-grow
      hide-details="auto"
      class="mb-6"
      outlined
      label="Vide Description"
      placeholder="Add video description here..."
    ></v-textarea>
    <PostGuideButton class="mb-4" />
  </div>
</template>

<script>
import ProductTagging from "../ProductTagging";
import PostGuideButton from "./PostGuideButton";
import VideoFetch from "../VideoFetch";

export default {
  components: {
    ProductTagging,
    PostGuideButton,
    VideoFetch
  },
  data: () => ({})
};
</script>
