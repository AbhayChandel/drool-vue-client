<template>
  <v-card class="py-10">
    <v-card-text class="d-flex flex-column align-center">
      <v-icon
        v-show="postDetails.type === 'review'"
        color="#4DB6AC"
        x-large
        class="mb-1"
        >mdi-message-draw</v-icon
      >
      <div class="mb-6 title">
        <span v-show="status === 'posting'">Posting {{ postType }}</span>
        <span v-show="result === 'success'"
          >{{ postType }} posted successfully</span
        >
        <span v-show="result === 'fail'">{{ postType }} not posted</span>
      </div>
      <div style="width:140px; text-align:center">
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
        v-show="postDetails.type === 'review' && result === 'success'"
        @click="goToProduct()"
        >Go to Product</v-btn
      >
      <v-btn
        outlined
        color="#4DB6AC"
        v-show="postDetails.type === 'guide' && result === 'success'"
        @click="goToPost()"
        >Go to Post</v-btn
      >
      <v-btn outlined color="#4DB6AC" v-show="result === 'fail'"
        >Try Again</v-btn
      >
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
    result: ""
  }),
  computed: {
    ...mapState("common/postdialogstore", ["postingStatus"]),
    ...mapState("common/postdialogstore", ["postingResult"]),
    ...mapState("common/postdialogstore", ["postDetails"]),
    ...mapState("common/postdialogstore", ["returnedPostDetails"])
  },
  watch: {
    postingStatus(newVal, oldVal) {
      console.log("Posting status is " + newVal);
      this.status = newVal;
      if (this.postDetails.type === "review") {
        this.postType = "Review";
      } else if (this.postDetails.type === "guide") {
        this.postType = "Video guide";
      } else if (this.postDetails.type === "discussion") {
        this.postType = "Discussion";
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
    goToProduct() {
      this.setDialogToClosed();
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
      this.setDialogToClosed();
    }
  }
};
</script>
