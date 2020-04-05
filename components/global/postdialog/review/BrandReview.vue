<template>
  <v-container class="pa-0 my-0">
    <PageTitle :title="brandDetails.name" />
    <v-card height="400px;" elevation="0">
      <v-card-text class="pb-0">
        <div v-for="option in brandDetails.options" :key="option.name">
          <div class="subtitle-1">{{ option.name }}</div>
          <v-slider
            v-model="option.rating"
            ticks="always"
            tick-size="4"
            step="1"
            :max="5"
            :tick-labels="trustTicksLabels"
            color="#4DB6AC"
            track-color="#e4e9fe"
            class="mb-4"
            @change="saveToStore()"
          ></v-slider>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";

import PageTitle from "./PageTitle";
export default {
  components: {
    PageTitle,
  },
  computed: {
    getSliderColor() {
      return this.$getRandomColor();
    },
    ...mapGetters("common/review", [
      "getBrandRatingMetrics",
      "getSelectedProduct",
    ]),
  },
  watch: {
    getBrandRatingMetrics(newVal) {
      this.brandDetails = this.getSelectedProduct.brand;
      var options = [];
      this.setOptionsArray(options, newVal);
      this.brandDetails.options = options;
    },
  },
  methods: {
    ...mapMutations({
      setBrandReview: "common/review/setBrandReview",
    }),
    saveToStore() {
      const rating = [...this.brandDetails.options];
      rating.forEach(this.sliceRatingsArray);
      this.setBrandReview(rating);
    },
    sliceRatingsArray(val) {
      delete val.color;
    },
    setOptionsArray(options, newVal) {
      var colors = ["pink lighten-2", "#FDD835", "#9FA8DA", "#4DB6AC"];
      for (var i = 0; i < newVal.length; i++) {
        var option = {};
        option.name = newVal[i];
        option.rating = 0;
        option.color = colors[i % colors.length];
        options[i] = option;
      }
    },
  },
  data() {
    return {
      trustTicksLabels: ["0", "1", "2", "3", "4", "5"],
      brandDetails: {},
    };
  },
};
</script>
