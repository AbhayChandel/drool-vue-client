<template>
  <v-card class="aspectCardStyle" style="width:100%; height:100%">
    <DisplayTitle :title="aspectData.title" />
    <TotalVotes :totalVotes="aspectData.votes" />
    <v-card-text class="pl-3">
      <v-progress-circular
        v-for="option in aspectData.options"
        :key="option.name"
        :rotate="-90"
        :size="90"
        :width="10"
        :value="getOptionVotePercentage(option.votes, aspectData.votes)"
        :color="getRandomColor"
        class="ma-2"
      >
        <span class="d-flex flex-column justify-center" style="color:#8da1d3">
          <span class="font-weight-bold">
            {{ option.name }}
          </span>
          <span style="text-align:center"
            >{{
              getOptionVotePercentage(option.votes, aspectData.votes)
            }}%</span
          >
        </span>
      </v-progress-circular>
    </v-card-text>
  </v-card>
</template>

<script>
import DisplayTitle from "@/components/product/aspect/DisplayTitle";
import TotalVotes from "@/components/product/aspect/TotalVotes";
export default {
  components: {
    DisplayTitle,
    TotalVotes
  },
  props: {
    aspectData: {
      type: Object,
      required: true
    }
  },
  methods: {
    getOptionVotePercentage(optionVotes, totalVotes) {
      return Math.round((optionVotes / totalVotes) * 100);
    }
  },
  computed: {
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
      return "#" + colors[Math.floor(Math.random() * Math.floor(14))];
    }
  }
};
</script>
