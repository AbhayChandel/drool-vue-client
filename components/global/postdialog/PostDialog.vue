<template>
  <v-dialog
    id="dialogOpen"
    :value="dialogOpen"
    @input="setDialogToClosed"
    max-width="600px"
  >
    <ReviewBooklet
      v-if="
        showReviewBooklet === true &&
          getPostDetails.mode == 'new' &&
          (getPostDetails.type == 'review' || getPostDetails.type == '')
      "
    />
    <GuideCard
      v-if="
        showGuideCard === true &&
          (getPostDetails.type == 'guide' ||
            (getPostDetails.mode == 'edit' && getPostDetails.medium == 'video'))
      "
    />
    <DiscussionCard
      v-if="showDiscussionCard === true && getPostDetails.type == 'discussion'"
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
        if (
          this.getPostDetails.mode == "new" &&
          this.getPostDetails.type === "review"
        ) {
          this.showReviewBooklet = false;
        } else if (
          this.getPostDetails.type === "guide" ||
          (this.getPostDetails.mode == "edit" &&
            this.getPostDetails.medium === "video")
        ) {
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
