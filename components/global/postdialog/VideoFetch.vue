<template>
  <div id="videoFetchContainer">
    <v-text-field
      v-if="showVideoURLField"
      v-model="videoURL"
      light
      label="YouTube Video Link"
      placeholder="Paste your video link here..."
      outlined
      class="pa-0 ma-0"
      hint="e.g https://www.youtube.com/watch?v=M7lVf-VE"
      persistent-hint
      :error-messages="errorMessages"
      :rules="[rules.required]"
      @blur="fetchYoutubeVideo"
    ></v-text-field>
    <v-card class="mx-auto" max-width="400" v-if="showThumbnail">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="getThumbnailURL"
      >
      </v-img>

      <div v-if="showVideoConfirmation">
        <v-card-text class="text--primary pa-0 pt-4 px-4">
          <div>Is this your video?</div>
        </v-card-text>

        <v-card-actions class="pa-0 pb-4">
          <v-btn color="orange" text @click="videoConfirmedPostive">
            Yes
          </v-btn>

          <v-btn color="orange" text @click="videoConfirmedNegative">
            No
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data: () => ({
    showVideoURLField: true,
    videoURL: "",
    videoId: "",
    showThumbnail: false,
    showVideoConfirmation: false,
    thumbnailURL: "",
    errorMessages: [],
    rules: {
      required: value =>
        !!value || "Required. e.g https://www.youtube.com/watch?v=M7lVf-VE"
    }
  }),
  computed: {
    ...mapGetters("common/postdialogstore", ["getPostDetails"]),
    getThumbnailURL() {
      return this.thumbnailURL;
    }
  },
  methods: {
    fetchYoutubeVideo() {
      this.errorMessages = [];
      if (this.videoURL != "") {
        if (this.videoURL.indexOf("v=") >= 0) {
          if (this.videoURL.indexOf("&") >= 0) {
            this.videoId = this.videoURL.substring(
              this.videoURL.indexOf("v=") + 2,
              this.videoURL.indexOf("&")
            );
          } else {
            this.videoId = this.videoURL.substring(
              this.videoURL.indexOf("v=") + 2
            );
          }

          this.thumbnailURL =
            "https://img.youtube.com/vi/" + this.videoId + "/0.jpg";
          this.showVideoConfirmation = true;
          this.showThumbnail = true;
        } else {
          this.videoId = "";
          this.thumbnailURL = "";
          this.showVideoConfirmation = false;
          this.showThumbnail = false;
          this.errorMessages.push(
            "Not a valid video link. e.g https://www.youtube.com/watch?v=M7lVf-VE"
          );
        }
      }
    },
    videoConfirmedPostive() {
      this.showVideoConfirmation = false;
      this.$emit("fetchedVideoId", this.videoId);
    },
    videoConfirmedNegative() {
      this.showVideoConfirmation = false;
      this.showThumbnail = false;
      this.thumbnailURL = "";
    }
  },
  mounted() {
    if (this.getPostDetails.mode == "edit") {
      this.showVideoURLField = false;
      this.videoURL = "v=" + this.getPostDetails.postData.sourceVideoId;
      this.fetchYoutubeVideo();
      this.showVideoConfirmation = false;
    }
  }
};
</script>

<style scoped>
#videoFetchContainer .v-btn {
  text-transform: none;
}
</style>
