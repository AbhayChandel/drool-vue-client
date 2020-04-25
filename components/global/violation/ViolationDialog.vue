<template>
  <v-dialog
    id="violationDialogOpen"
    :value="vDialogOpen"
    @input="setDialogToClosed"
    max-width="400px"
    class="mb-4"
  >
    <ViolationForm :violations="violations" />
  </v-dialog>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

import ViolationForm from "./ViolationForm";

export default {
  components: { ViolationForm },
  data: () => ({ violations: [] }),
  computed: {
    ...mapState("common/violation", ["vDialogOpen", "postType"])
  },
  watch: {
    postType(newVal, oldVal) {
      if (newVal != null) {
        this.getTemplateAction(newVal)
          .then(data => {
            this.violations = data;
            this.setFormStatus("loaded");
          })
          .catch(message => {
            console.log("error in componenet: " + message);
            this.setFormStatus("failed");
          });
      }
    }
  },
  methods: {
    ...mapMutations({
      setDialogToClosed: "common/violation/setDialogToClosed",
      setFormStatus: "common/violation/setFormStatus"
    }),
    ...mapActions({
      getTemplateAction: "common/violation/getTemplate"
    })
  }
};
</script>
