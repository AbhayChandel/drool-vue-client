<template>
  <v-dialog
    id="dialogOpen"
    v-model="dialogOpen"
    @input="setDialogToClosed"
    max-width="600px"
    class="pa-0 ma-0"
  >
    <ReviewCard v-if="getPostDetails == 'review' || getPostDetails == ''" />
    <GuideCard v-if="getPostDetails == 'guide'" />
    <DiscussionCard v-if="getPostDetails == 'discussion'" />
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";

import ReviewCard from "./review/ReviewCard";
import GuideCard from "./guide/GuideCard";
import DiscussionCard from "./discussion/DiscussionCard";

export default {
  components: {
    ReviewCard,
    GuideCard,
    DiscussionCard
  },
  data: () => ({}),
  computed: {
    ...mapGetters("common/postdialogstore", ["getPostDetails"]),
    ...mapState("common/postdialogstore", ["dialogOpen"])
  },
  methods: {
    ...mapMutations({
      setDialogToClosed: "common/postdialogstore/setDialogToClosed"
    })
  }
};
</script>
