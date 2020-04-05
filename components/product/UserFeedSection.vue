<template>
  <v-container class="pa-0">
    <v-row class="d-flex flex-row flex-wrap justify-start align-stretch">
      <v-col
        v-for="aspect in aspects"
        :key="aspect.id"
        class="ma-0 pa-0 ma-2"
        style=" min-width:230px; max-height:330px"
      >
        <BoldChipsDisplay
          v-if="aspect.displayComp === 'bc'"
          :aspectData="aspect"
        />
        <LightChipsDisplay
          v-if="aspect.displayComp === 'lc'"
          :aspectData="aspect"
          class=""
        />
        <CircularProgressDisplay
          v-else-if="aspect.displayComp === 'pc'"
          :aspectData="aspect"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BoldChipsDisplay from "@/components/product/aspect/BoldChipsDisplay";
import LightChipsDisplay from "@/components/product/aspect/LightChipsDisplay";
import CircularProgressDisplay from "@/components/product/aspect/CircularProgressDisplay";

export default {
  components: {
    BoldChipsDisplay,
    LightChipsDisplay,
    CircularProgressDisplay
  },
  props: {
    aspects: {
      type: Array,
      required: true
    }
  },
  data: () => ({})
};
</script>
