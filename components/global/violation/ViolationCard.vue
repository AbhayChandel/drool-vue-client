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
            v-for="violation in violations"
            :key="violation.id"
            class="pa-0 ma-0"
          >
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox v-model="active" color="red darken-1"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ violation.violation }}</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
        <div
          class="mt-8 d-flex flex-column align-center"
          v-if="formStatus == 'success' || formStatus == 'failed'"
        >
          <p class="subtitle-1" v-if="formStatus == 'success'">
            Thanks, Violations are repoted. We are looking into them.
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
import { mapMutations, mapState } from "vuex";

import ViolationForm from "./ViolationForm";

export default {
  components: { ViolationForm },
  methods: {
    ...mapMutations({
      setDialogToClosed: "common/violation/setDialogToClosed",
      setFormStatus: "common/violation/setFormStatus"
    }),
    report() {
      var violationsReported = [];
      var i = 0;
      for (i; i < this.selected.length; i++) {
        violationsReported.push(this.violations[this.selected[i]].violation);
      }
      if (violationsReported.length > 0) {
        this.loading = true;
        this.loading = false;
        this.setFormStatus("success");
        this.setFormStatus("failed");
      }
    }
  },
  computed: {
    ...mapState("common/violation", ["formStatus", "postDetails"])
  },
  watch: {
    postDetails: function(val) {
      if (val != null) {
        this.setFormStatus("loaded");
      }
    }
  },
  data: () => ({
    loading: false,
    selected: [],
    violations: [
      {
        id: "5e9ea57bba23856d44d16111",
        violation: "Use of bad language."
      },
      {
        id: "5e9ea57bba23856d44d16112",
        violation: "Disrespectful to a person/community/race/religion."
      },
      {
        id: "5e9ea57bba23856d44d16113",
        violation: "Sexual/Vulgar."
      },
      {
        id: "5e9ea57bba23856d44d16114",
        violation: "Content piracy."
      },
      {
        id: "5e9ea57bba23856d44d16115",
        violation: "Off-topic."
      },
      {
        id: "5e9ea57bba23856d44d16116",
        violation: "Advertisement for a product."
      }
    ]
  })
};
</script>
