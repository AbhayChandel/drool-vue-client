<template>
  <v-container id="ratingsContainer" class="py-0 my-0">
    <PageTitle title="Preferences" />
    <v-row class="d-flex flex-row flex-wrap justify-start">
      <v-col
        v-for="aspect in aspects"
        :key="aspect.id"
        class="ma-0 pa-0 ma-2"
        style=" min-width:230px; max-height:213px"
      >
        <v-card style="width:100%; height:100%" class="aspectReviewCardStyle">
          <v-card-title class="pb-2">{{ aspect.title }}</v-card-title>
          <v-card-text class="d-flex flex-row flex-wrap justify-start">
            <v-checkbox
              v-for="option in aspect.options"
              :key="option"
              v-model="aspect.selected"
              :label="option"
              :color="getRandomColor"
              :value="option"
              hide-details
              multiple
              class="shrink ma-1 pa-0"
              style="min-width:110px;"
            ></v-checkbox>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from "vuex";

import PageTitle from "./PageTitle";
export default {
  components: {
    PageTitle
  },
  watch: {
    selectedProduct(val) {
      console.log("Selected product is updated");
      this.productUpdated = true;
      this.product = val;
    }
  },
  computed: {
    ...mapState("common/review", ["selectedProduct"]),
    getRandomColor() {
      var colors = [
        "ec879b",
        "b4dcfc",
        "fcdc94",
        "a8a6c3",
        "a897cf",
        "93d7d5",
        "96c0c5",
        "9bc7b6",
        "8be0c7",
        "c9d1d8",
        "7aab55",
        "fad1a7",
        "b7aec2"
      ];
      return (
        "#" + colors[Math.floor(Math.random() * Math.floor(colors.length + 1))]
      );
    }
  },
  data() {
    return {
      productUpdated: false,
      product: {},
      aspects: [
        {
          id: "1",
          selectType: "Mulitple",
          title: "I currently?",
          options: ["Have it", "Want it", "Had it"],
          selected: []
        },
        {
          id: "2",
          title: "Shades I like?",
          options: [
            "Red Coat",
            "Rosy Sunday",
            "Cherry Chic",
            "Rosetta Motive",
            "Cabernet Category",
            "Maple Map",
            "Coffee Command",
            "Orange Edge",
            "Pink Perfect",
            "Ruby Rush"
          ],
          selected: []
        },
        {
          id: "3",
          title: "Top Styles",
          options: ["Retro", "Bohemian", "Chic", "Sexy", "Casual", "Preppy"],
          selected: []
        },
        {
          id: "4",
          title: "Occasion",
          options: ["Wedding", "Clubbing", "Brunch", "Party", "Movies"],
          selected: []
        },
        {
          id: "5",
          title: "Settings",
          options: ["office", "Day Out", "shopping"],
          selected: []
        }
      ]
      /* preferences: [
        {
          id: "1",
          title: "Subscription frequence",
          options: ["Daily", "Weekly", "Fortnight", "Monthly"],
          selected: []
        },
        {
          id: "2",
          title: "Topics",
          options: ["Sports", "Politics", "Art", "Music", "Health", "Tech"],
          selected: []
        },
        {
          id: "3",
          title: "Promotional Offers",
          options: ["Daily", "Weekly", "Fortnight", "Monthly", "Never"],
          selected: []
        }
      ] */
    };
  }
};
</script>
