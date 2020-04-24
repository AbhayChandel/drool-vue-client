<template>
  <v-dialog
    id="violationDialogOpen"
    :value="dialogOpen"
    @input="setDialogToClosed"
    max-width="400px"
    class="mb-4"
  >
    <ViolationCard />
    <Results v-show="showResultsCard === true" />
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";

import ViolationCard from "./ViolationCard";
import Results from "./Results";

export default {
  components: {
    ViolationCard,
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
    ...mapState("common/violation", ["dialogOpen"])
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
      setDialogToClosed: "common/violation/setDialogToClosed"
    })
  }
};
</script>
