<template>
  <v-dialog
    retain-focus
    :value="isDialogOpen"
    @input="setDialogToClosed"
    max-width="600px"
    class="pa-0 ma-0 "
  >
    <ReviewCard />
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import ReviewCard from "./review/ReviewCard";

export default {
  components: {
    ReviewCard
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
