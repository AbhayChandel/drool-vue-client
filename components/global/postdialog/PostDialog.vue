<template>
  <v-dialog
    id="dialogOpen"
    v-model="dialogOpen"
    @input="setDialogToClosed"
    max-width="600px"
    class="pa-0 ma-0"
  >
    <ReviewBooklet
      v-if="
        (getPostDetails.type == 'review' || getPostDetails.type == '') &&
          showReviewBooklet === true
      "
    />
    <GuideCard
      v-if="getPostDetails.type == 'guide' && showGuideCard === true"
      :postData="getPostDetails.postData"
      :mode="getPostDetails.mode"
    />
    <DiscussionCard
      v-if="getPostDetails.type == 'discussion' && showDiscussionCard === true"
    />
    <Results v-show="showResultsCard === true" />
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";

import ReviewBooklet from "./review/ReviewBooklet";
import GuideCard from "./guide/GuideCard";
import DiscussionCard from "./discussion/DiscussionCard";
import Results from "./Results";

export default {
  components: {
    ReviewBooklet,
    GuideCard,
    DiscussionCard,
    Results
  },
  data: () => ({
    showResultsCard: false,
    showReviewBooklet: true,
    showGuideCard: true,
    showDiscussionCard: true
  }),
  computed: {
    ...mapGetters("common/postdialogstore", ["getPostDetails"]),
    ...mapGetters("common/postdialogstore", ["getPostingStatus"]),
    ...mapState("common/postdialogstore", ["dialogOpen"])
  },
  watch: {
    getPostingStatus(newVal) {
      if (newVal === "posting") {
        if (this.getPostDetails.type === "review") {
          this.showReviewBooklet = false;
        } else if (this.getPostDetails.type === "guide") {
          this.showGuideCard = false;
        } else if (this.getPostDetails.type === "discussion") {
          this.showDiscussionCard = false;
        }
        this.showResultsCard = true;
      } else {
        this.showReviewBooklet = true;
        this.showGuideCard = true;
        this.showDiscussionCard = true;
        this.showResultsCard = false;
      }
    }
  },
  methods: {
    ...mapMutations({
      setDialogToClosed: "common/postdialogstore/setDialogToClosed"
    })
  }
};
</script>
