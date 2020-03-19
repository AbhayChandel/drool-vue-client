<template>
  <v-container class="py-0 my-0">
    <PageTitle :title="brandName" />
    <v-card height="400px;" elevation="0">
      <v-card-text class="pb-0">
        <div class="subtitle-1">Quality</div>
        <v-slider
          label=""
          ticks="always"
          step="20"
          tick-size="4"
          :tick-labels="trustTicksLabels"
          color="#ec879b"
          track-color="#e4e9fe"
          class="mb-4"
        ></v-slider>
        <div class="subtitle-1">Trendy</div>
        <v-slider
          label=""
          ticks="always"
          step="20"
          tick-size="4"
          :tick-labels="trustTicksLabels"
          color="#fcdc94"
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
          color="#b4dcfc"
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
          color="#3c73e1"
          track-color="#e4e9fe"
          class="mb-4"
        ></v-slider>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import PageTitle from "./PageTitle";
export default {
  components: {
    PageTitle
  },
  data() {
    return {
      brandName: "Lakme",
      trustTicksLabels: ["0", "1", "2", "3", "4", "5"]
    };
  }
};
</script>
