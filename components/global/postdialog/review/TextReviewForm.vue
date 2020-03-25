<template>
  <div class="mt-2" id="textRevieForm">
    <v-textarea
      v-model="detailedReview"
      outlined
      label="Detailed Review"
      placeholder="Write here..."
      class="mt-8 mb-0 pa-0"
      rows="10"
      :rules="[rules.required]"
      @change="saveToStore()"
      validate-on-blur
      @update:error="setStepHeaderInErrorState()"
    ></v-textarea>
    <v-textarea
      id="reviewSummary"
      v-model="reviewSummary"
      auto-grow
      rows="1"
      name="reviewSummary"
      label="Review Summary"
      placeholder="10 words or less..."
      :rules="[rules.required]"
      @change="saveToStore()"
      counter="50"
      maxlength="50"
      class="pt-0 mt-10"
      validate-on-blur
    ></v-textarea>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

import ProductTagging from "../ProductTagging";
import Recommend from "./Recommend";
import SubmitReviewButton from "./SubmitReviewButton";

export default {
  components: {
    ProductTagging,
    Recommend,
    SubmitReviewButton
  },
  computed: {
    ...mapGetters("common/review", ["getTextReviewForm"])
  },
  data: () => ({
    detailedReview: "",
    reviewSummary: "",
    rules: {
      required: value => !!value || "Required."
    }
  }),
  methods: {
    ...mapMutations({
      setTextReviewForm: "common/review/setTextReviewForm"
    }),
    saveToStore() {
      this.setTextReviewForm({
        detailedReview: this.detailedReview,
        reviewSummary: this.reviewSummary
      });
    },
    setStepHeaderInErrorState() {
      alert("PUtting header in error state");
    }
  },
  mounted() {
    this.detailedReview = this.getTextReviewForm.detailedReview;
    this.reviewSummary = this.getTextReviewForm.reviewSummary;
  }
};
</script>
