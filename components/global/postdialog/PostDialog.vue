<template>
  <v-dialog
    id="dialogOpen"
    v-model="dialogOpen"
    @input="setDialogToClosed"
    max-width="600px"
    class="pa-0 ma-0"
  >
    <ReviewBooklet
      v-if="getPostDetails.type == 'review' || getPostDetails.type == ''"
    />
    <GuideCard
      v-if="getPostDetails.type == 'guide'"
      :postData="getPostDetails.postData"
      :mode="getPostDetails.mode"
    />
    <DiscussionCard v-if="getPostDetails.type == 'discussion'" />
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";

import ReviewBooklet from "./review/ReviewBooklet";
import GuideCard from "./guide/GuideCard";
import DiscussionCard from "./discussion/DiscussionCard";

export default {
  components: {
    ReviewBooklet,
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
