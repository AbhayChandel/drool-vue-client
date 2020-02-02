<template>
  <v-card width="100%;">
    <v-row
      style="background-color:#f2d78e"
      class="d-flex flex-row px-0 ma-0 py-2"
    >
      <v-col class="pa-0 ma-0">
        <v-row class="d-flex flex-row justify-end ma-0 pa-0 pr-1">
          <v-icon @click.stop="setDialogToClosed">mdi-close-circle</v-icon>
        </v-row>
        <v-row class="d-flex flex-row justify-center ma-0 pa-0">
          <v-alert
            v-if="dialogMessage"
            outlined
            dense
            color="pink"
            class="pa-1 ma-0 mb-1 body-2 font-weight-medium"
            >{{ dialogMessage }}</v-alert
          >
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col cols="5" class="pl-sm-8 pl-2">
            <v-img
              class="white--text align-end"
              style="width:100%;"
              src="/join_girls.svg"
            ></v-img>
          </v-col>
          <v-col
            cols="6"
            class="subtitle-1 font-weight-bold d-flex align-start pt-sm-10"
          >
            Discover the communities, products and lot more.
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="d-flex flex-row justify-center my-sm-8 mx-0">
      <v-col cols="9" sm="6"><LoginForm /></v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="d-flex flex-row justify-center py-1 py-sm-5 mx-0 pa-0">
      <v-col cols="9" sm="6"
        >Not a member?
        <span
          class="blueNuxtLinkStyleMedium font-weight-bold"
          @click="toggleCards"
        >
          Join Now
        </span></v-col
      ></v-row
    >
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import LoginForm from "./LoginForm";

export default {
  components: {
    LoginForm
  },
  methods: {
    toggleCards() {
      this.$emit("toggleCardEvent");
    },
    ...mapMutations({
      setDialogToClosed: "common/loginsignupdialog/setDialogToClosed"
    })
  },
  computed: {
    ...mapGetters("common/loginsignupdialog", ["dialogMessage"])
  }
};
</script>

<style scoped></style>
