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
            :color="option.color"
            track-color="#e4e9fe"
            class="mb-4"
            @change="saveToStore()"
          ></v-slider>
        </div>
        <!-- <div class="subtitle-1">Trendy</div>
        <v-slider
          label=""
          ticks="always"
          step="20"
          tick-size="4"
          :tick-labels="trustTicksLabels"
          color="#FDD835"
          track-color="#e4e9fe"
          class="mb-4"
        ></v-slider>

        <div class="subtitle-1">Trustable</div>
        <v-slider
          label=""
          ticks="always"
          step="20"
          tick-size="4"
          :tick-labels="trustTicksLabels"
          color="#9FA8DA"
          track-color="#e4e9fe"
          class="mb-4"
        ></v-slider>
        <div class="subtitle-1">Overall</div>
        <v-slider
          label=""
          ticks="always"
          step="20"
          tick-size="4"
          :tick-labels="trustTicksLabels"
          color="#4DB6AC"
          track-color="#e4e9fe"
          class="mb-4"
        ></v-slider> -->
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import { mapMutations } from "vuex";

import PageTitle from "./PageTitle";
export default {
  components: {
    PageTitle
  },
  computed: {
    getSliderColor() {
      return this.$getRandomColor();
    }
  },
  methods: {
    ...mapMutations({
      setBrandReview: "common/review/setBrandReview"
    }),
    saveToStore() {
      const rating = [...this.brandDetails.options];
      rating.forEach(this.sliceRatingsArray);
      this.setBrandReview(rating);
    },
    sliceRatingsArray(val) {
      delete val.color;
    }
  },
  data() {
    return {
      color: "",
      trustTicksLabels: ["0", "1", "2", "3", "4", "5"],
      colors: [
        "#ec879b",
        "#e4e9fe",
        "#9FA8DA",
        "#4DB6AC",
        "#ec879b",
        "#e4e9fe"
      ],
      brandDetails: {
        name: "Lakme",
        options: [
          {
            name: "Quality",
            rating: 0,
            color: "#ec879b"
          },
          {
            name: "Trendy",
            rating: 0,
            color: "#FDD835"
          },
          {
            name: "Trustable",
            rating: 0,
            color: "#9FA8DA"
          },
          {
            name: "Overall",
            rating: 0,
            color: "#4DB6AC"
          }
        ]
      }
    };
  }
};
</script>
