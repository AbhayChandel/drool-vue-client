<template>
  <v-dialog
    retain-focus
    :value="isDialogOpen"
    @input="setDialogToClosed"
    max-width="600px"
    class="pa-0 ma-0 "
  >
    <!-- <ReviewCard /> -->
    <!-- <GuideCard /> -->
    <DiscussionCard />
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import ReviewCard from "./review/ReviewCard";
import GuideCard from "./guide/GuideCard";
import DiscussionCard from "./discussion/DiscussionCard";

export default {
  components: {
    ReviewCard,
    GuideCard,
    DiscussionCard
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
