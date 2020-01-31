<template>
  <v-dialog
    :value="isDialogOpen"
    @input="setDialogToClosed"
    max-width="600px"
    class="pa-0 ma-0"
  >
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
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
