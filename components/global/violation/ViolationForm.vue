<template>
  <v-card>
    <v-form @submit.prevent="report">
      <v-card-title class="justify-center">Report Violation</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="px-6 pt-0">
        <div
          class="mt-8 d-flex flex-column align-center"
          v-if="formStatus == 'loading'"
        >
          <v-progress-circular
            indeterminate
            size="32"
            color="red darken-1"
          ></v-progress-circular>
          <p class="subtitle-1">Fetching violations</p>
        </div>
        <v-list-item-group
          multiple
          v-if="formStatus == 'loaded'"
          v-model="selected"
        >
          <v-list-item
            v-for="(violation, index) in violations"
            :key="index"
            class="pa-0 ma-0"
          >
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox v-model="active" color="red darken-1"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ violation }}</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
        <div
          class="mt-8 d-flex flex-column align-center"
          v-if="formStatus == 'success' || formStatus == 'failed'"
        >
          <p class="subtitle-1" v-if="formStatus == 'success'">
            Thanks, violations have been reported. We are looking into them.
            Appropirate action will be taken.
          </p>
          <p class="subtitle-1" v-if="formStatus == 'failed'">
            Sorry, We are not able to report the violations. Kindly try in some
            time.
          </p>
          <v-btn outlined class="mb-4" @click.stop="setDialogToClosed"
            >Close</v-btn
          >
        </div>
      </v-card-text>
      <v-card-actions class="px-6" v-if="formStatus == 'loaded'">
        <v-btn
          type="submit"
          text
          color="red darken-1"
          class="mb-4 mr-2"
          :loading="loading"
          :disabled="loading"
          >Report</v-btn
        >
        <v-btn text class="mb-4" @click.stop="setDialogToClosed">Cancel</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { mapMutations, mapState, mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setDialogToClosed: "common/violation/setDialogToClosed",
      setFormStatus: "common/violation/setFormStatus"
    }),
    ...mapActions({
      reportViolationAction: "common/violation/reportViolation"
    }),
    report() {
      var violationsReported = [];
      var i = 0;
      for (i; i < this.selected.length; i++) {
        violationsReported.push(this.violations[this.selected[i]]);
      }
      if (violationsReported.length > 0) {
        this.loading = true;
        this.reportViolationAction({
          violations: violationsReported
        })
          .then(data => {
            if (data) {
              this.setFormStatus("success");
            }
            this.loading = false;
          })
          .catch(message => {
            console.log("error in componenet: " + message);
            this.setFormStatus("failed");
            this.loading = false;
          });
      }
    }
  },
  computed: {
    ...mapState("common/violation", ["formStatus"])
  },
  data: () => ({
    loading: false,
    selected: []
  }),
  props: {
    violations: {
      type: Array,
      required: true
    }
  }
};
</script>
