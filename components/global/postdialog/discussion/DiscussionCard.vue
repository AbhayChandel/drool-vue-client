<template>
  <v-card width="100%; height:100%;" class="px-3">
    <v-row class="d-flex flex-row px-0 ma-0 py-2">
      <v-col class="pa-0 ma-0">
        <v-row class="d-flex flex-row justify-end ma-0 pa-0 pr-1">
          <v-icon @click.stop="setDialogToClosed">mdi-close-circle</v-icon>
        </v-row>
        <v-row>
          <v-tabs grow class="pa-0">
            <v-tab class="pa-0 mb-4">
              <v-icon medium class="mr-1">mdi-forum</v-icon> New Discussion
            </v-tab>
            <v-tab-item class="pa-0 px-4 pt-8"><DiscussionForm /></v-tab-item>
          </v-tabs>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

import DiscussionForm from "./DiscussionForm";

export default {
  components: { DiscussionForm },
  methods: {
    ...mapMutations({
      setDialogToClosed: "common/postdialogstore/setDialogToClosed"
    })
  }
};
</script>
