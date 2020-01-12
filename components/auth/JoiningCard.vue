<template>
  <v-card width="100%;">
    <v-row
      style="background-color:#f1cdd7"
      class="d-flex flex-row px-0 ma-0 py-2"
    >
      <v-col class="pa-0 ma-0">
        <v-row class="d-flex flex-row justify-end ma-0 pa-0 pr-1">
          <v-icon @click.stop="setDialogToClosed">mdi-close-circle</v-icon>
        </v-row>
        <v-row class="d-flex flex-row justify-center ma-0 pa-0">
          <v-alert
            value="dialogMessage"
            outlined
            dense
            color="#4561ff"
            class="pa-1 ma-0 mb-1 body-2 font-weight-medium"
            >{{ dialogMessage }}</v-alert
          >
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col cols="5" class="pl-sm-8 pl-2">
            <v-img
              class="white--text align-end"
              style="width:100%;"
              src="/login_girl.svg"
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
      <v-col cols="9" sm="6"><JoiningForm /></v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="d-flex flex-row justify-center py-sm-5 mx-0 pa-0">
      <v-col cols="9" sm="6"
        >Already a member?
        <span
          class="blueNuxtLinkStyleMedium font-weight-bold"
          @click="toggleCards"
        >
          Log In
        </span></v-col
      ></v-row
    >
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import JoiningForm from "@/components/auth/JoiningForm";

export default {
  components: {
    JoiningForm
  },
  methods: {
    toggleCards() {
      this.$emit("toggleCardEvent");
    },
    ...mapMutations({
      setDialogToClosed: "user/loginsignupdialog/setDialogToClosed"
    })
  },
  computed: {
    ...mapGetters("user/loginsignupdialog", ["dialogMessage"])
  }
};
</script>

<style scoped></style>
