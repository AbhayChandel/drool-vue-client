<template>
  <v-dialog
    retain-focus
    :value="isDialogOpen"
    @input="setDialogToClosed"
    max-width="600px"
    class="pa-0 ma-0 "
  >
    <!-- <ReviewCard /> -->
    <GuideCard />
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import ReviewCard from "./review/ReviewCard";
import GuideCard from "./guide/GuideCard";

export default {
  components: {
    ReviewCard,
    GuideCard
  },
  data: () => ({
    showDialog: true
  }),
  computed: {
    ...mapGetters("common/postdialogstore", ["isDialogOpen"])
  },
  methods: {
    ...mapMutations({
      setDialogToClosed: "common/postdialogstore/setDialogToClosed"
    })
  }
};
</script>
