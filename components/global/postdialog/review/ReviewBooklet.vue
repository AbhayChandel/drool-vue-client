<template>
  <v-card id="reviewCard">
    <v-card-title class="justify-center">
      Post Review
    </v-card-title>
    <v-divider color="blue" style="height:5px;"></v-divider>
    <v-stepper v-model="e1" style="width:100% shadow:none" title="Post Review">
      <v-stepper-header>
        <v-stepper-step key="selectStep" step="1" editable>
          Select Product
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step key="reviewStep" step="2" editable>
          Review
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step key="preferenceStep" step="3" editable>
          Preferences
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step key="brandReviewStep" step="4" editable>
          Brand
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step key="recommendationStep" step="5" editable>
          Recommendation
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1" class="pb-0 pt-3">
          <PreReview class="mb-2" @blur="fetchProductsAspects()" />
        </v-stepper-content>
        <v-stepper-content step="2" class="pb-0 pt-3">
          <TextReviewForm v-if="getReviewType === 'text'" />
          <VideoReviewForm v-if="getReviewType === 'video'" />
        </v-stepper-content>
        <v-stepper-content step="3" class="pb-0 px-4 pt-3">
          <Preference />
        </v-stepper-content>
        <v-stepper-content step="4" class="pb-0 px-4 pt-3">
          <BrandReview />
        </v-stepper-content>
        <v-stepper-content step="5" class="pb-0 pt-3">
          <Recommend class="mb-4" />
          <v-btn block outlined medium color="blue">Post Review</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

    <v-card-actions class="pb-6 px-6 mt-4">
      <v-btn
        color="primary"
        @click="backStep(e1)"
        v-show="showBackButton"
        class="mr-2"
        ><v-icon>mdi-chevron-left</v-icon>
        Back
      </v-btn>
      <v-btn
        color="primary"
        @click="nextStep(e1)"
        v-show="showNextButton"
        class="ma-0"
      >
        Next
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-btn text @click.stop="setDialogToClosed">Cancel</v-btn></v-card-actions
    >
  </v-card>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import PreReview from "./PreReview";
import TextReviewForm from "./TextReviewForm";
import VideoReviewForm from "./VideoReviewForm";
import Preference from "./Preference";
import BrandReview from "./BrandReview";
import Recommend from "./Recommend";
export default {
  components: {
    PreReview,
    TextReviewForm,
    VideoReviewForm,
    Preference,
    BrandReview,
    Recommend
  },
  data() {
    return {
      e1: 1,
      steps: 5
    };
  },

  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
      t;
    }
  },

  methods: {
    nextStep(n) {
      if (typeof n === "string") {
        n = parseInt(n);
      }
      if (n !== this.steps) {
        this.e1 = n + 1;
      }
    },
    backStep(n) {
      if (typeof n === "string") {
        n = parseInt(n);
      }
      if (n !== 1) {
        this.e1 = n - 1;
      }
    },
    ...mapMutations({
      setDialogToClosed: "common/postdialogstore/setDialogToClosed"
    }),
    fetchProductsAspects() {
      alert("Fetching products aspects !!! " + this.e1);
    }
  },
  computed: {
    showBackButton() {
      return this.e1 === 1 ? false : true;
    },
    showNextButton() {
      return this.e1 < this.steps ? true : false;
    },
    showPostButton() {
      return this.e1 === this.steps ? true : false;
    },
    ...mapGetters("common/review", ["getReviewType"])
  }
};
</script>
<style>
#reviewCard .v-stepper {
  box-shadow: none;
}
</style>
