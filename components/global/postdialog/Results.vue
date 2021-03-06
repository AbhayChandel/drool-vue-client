<template>
  <v-card class="py-10">
    <v-card-text class="d-flex flex-column align-center">
      <v-icon
        v-show="postDetails.type === 'review' && getReviewType === 'text'"
        color="#4DB6AC"
        x-large
        class="mb-1"
        >mdi-message-draw</v-icon
      >
      <v-icon
        v-show="
          postDetails.type === 'guide' ||
            (postDetails.type === 'review' && getReviewType === 'video')
        "
        color="#4DB6AC"
        x-large
        class="mb-1"
        >mdi-video</v-icon
      >
      <v-icon
        v-show="postDetails.type === 'discussion'"
        color="#4DB6AC"
        x-large
        class="mb-1"
        >mdi-forum</v-icon
      >
      <div class="mb-6 title">
        <span v-show="status === 'posting'"
          >{{ actionVerb1 }} {{ postType }}</span
        >
        <span v-show="result === 'success'"
          >{{ postType }} {{ actionVerb2 }} successfully</span
        >
        <span v-show="result === 'fail'"
          >{{ postType }} not {{ actionVerb2 }}</span
        >
      </div>
      <div style="width: 140px; text-align: center;">
        <v-progress-linear
          color="#1c7068"
          indeterminate
          rounded
          height="5"
          v-show="status === 'posting'"
        >
        </v-progress-linear>
        <v-icon
          color="#FFA726"
          v-show="result === 'success'"
          size="60px"
          class="mb-1"
          >mdi-emoticon
        </v-icon>
        <v-icon
          color="#EF5350"
          v-show="result === 'fail'"
          size="60px"
          class="mb-1"
          >mdi-emoticon-sad</v-icon
        >
      </div>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn
        outlined
        color="#4DB6AC"
        v-show="result === 'success'"
        @click="goTo()"
        >{{ actionBtnMsg }}</v-btn
      >
      <!-- <v-btn outlined color="#4DB6AC" v-show="result === 'fail'"
        >Try Again</v-btn
      > -->
      <v-btn
        outlined
        color="#4DB6AC"
        v-show="status !== 'posting'"
        @click.stop="setDialogToClosed"
        >Close</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  data: () => ({
    postType: "",
    status: "",
    result: "",
    actionBtnMsg: "",
    actionVerb1: "Posting",
    actionVerb2: "posted"
  }),
  computed: {
    ...mapState("common/postdialogstore", [
      "postingStatus",
      "postingResult",
      "postDetails",
      "returnedPostDetails"
    ]),
    ...mapState("common/review", ["reviewType"]),
    ...mapGetters("common/review", ["getReviewType"])
  },
  watch: {
    postingStatus(newVal, oldVal) {
      console.log("Posting status is " + newVal);
      this.status = newVal;
      if (
        this.postDetails.type === "review" &&
        this.postDetails.medium === "text"
      ) {
        this.postType = "Review";
        this.actionBtnMsg = "Go to Product";
      } else if (this.postDetails.type === "guide") {
        this.postType = "Video guide";
        this.actionBtnMsg = "Go to Post";
      } else if (
        this.postDetails.type === "review" &&
        this.postDetails.medium === "video"
      ) {
        this.postType = "Video review";
        this.actionBtnMsg = "Go to Post";
      } else if (this.postDetails.type === "discussion") {
        this.postType = "Discussion";
        this.actionBtnMsg = "Go to Discussion";
      }
      if (this.postDetails.mode === "new") {
        this.actionVerb1 = "Posting";
        this.actionVerb2 = "posted";
      } else if (this.postDetails.mode === "edit") {
        this.actionVerb1 = "Saving";
        this.actionVerb2 = "saved";
      }
    },
    postingResult(newVal, oldVal) {
      this.status = "";
      console.log("Posting result is " + newVal);
      this.result = newVal;
    }
  },
  methods: {
    ...mapMutations({
      setDialogToClosed: "common/postdialogstore/setDialogToClosed"
    }),
    goTo() {
      if (
        this.postDetails.type === "review" &&
        this.postDetails.medium === "text"
      ) {
        this.goToProduct();
      } else if (
        this.postDetails.type === "guide" ||
        (this.postDetails.type === "review" &&
          this.postDetails.medium === "video")
      ) {
        this.goToPost();
      } else if (this.postDetails.type === "discussion") {
        this.goToDiscussion();
      }
      this.setDialogToClosed();
    },
    goToProduct() {
      this.$router.push({
        path: `/product/${this.returnedPostDetails.productId}`
      });
    },
    goToPost() {
      if (this.postDetails.mode == "edit") {
        var updateStatus =
          this.$route.query.updated == undefined ||
          this.$route.query.updated == ""
            ? true
            : "";
        this.$router.push({
          name: "video",
          query: { vi: this.returnedPostDetails.postId, updated: updateStatus }
        });
      } else {
        this.$router.push({
          name: "video",
          query: { vi: this.returnedPostDetails.postId }
        });
      }
    },
    goToDiscussion() {
      this.$router.push({
        path: `/discussion/${this.returnedPostDetails.postId}`
      });
    }
  }
};
</script>
