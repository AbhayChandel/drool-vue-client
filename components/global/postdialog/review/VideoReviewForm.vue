<template>
  <div>
    <VideoFetch class="mb-6 mt-1" @fetchedVideoId="videoFetched($event)" />
    <v-text-field
      v-model="videoTitle"
      light
      class="mb-6"
      label="Video Title"
      placeholder="Add video title here..."
      outlined
      @change="saveToStore()"
    ></v-text-field>
    <v-textarea
      v-model="videoDescription"
      light
      auto-grow
      outlined
      label="Video Description"
      placeholder="Add video description here..."
      @change="saveToStore()"
    ></v-textarea>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

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
  computed: {
    ...mapGetters("common/review", ["getVideoReviewForm"])
  },
  methods: {
    ...mapMutations({
      setVideoReviewForm: "common/review/setVideoReviewForm"
    }),
    saveToStore() {
      this.setVideoReviewForm({
        sourceVideoId: this.sourceVideoId,
        videoTitle: this.videoTitle,
        videoDescription: this.videoDescription
      });
    },
    videoFetched(val) {
      this.sourceVideoId = val;
      this.saveToStore();
    }
  },
  data: () => ({
    sourceVideoId: "",
    videoTitle: "",
    videoDescription: ""
  }),
  mounted() {
    this.sourceVideoId = this.getVideoReviewForm.sourceVideoId;
    this.videoTitle = this.getVideoReviewForm.videoTitle;
    this.videoDescription = this.getVideoReviewForm.videoDescription;
  }
};
</script>
