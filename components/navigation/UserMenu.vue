<template>
  <v-menu offset-y left>
    <template v-slot:activator="{ on }">
      <v-btn text icon color="grey darken-1" v-on="on">
        <v-icon large>mdi-account-circle</v-icon>
      </v-btn>
    </template>

    <v-list min-width="275">
      <v-list-item
        ><v-list-item-title class="subtitle-1 my-1"
          >Welcome back,
          <span
            class="subtitle-1 font-weight-medium red--text text--darken-1 ml-2"
            >champak</span
          ></v-list-item-title
        >
      </v-list-item>
      <v-divider class="mb-2"></v-divider>
      <v-list-item>
        <v-list-item-title>My Profile</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Account Settings</v-list-item-title>
      </v-list-item>
      <v-list-item @click="signOutAction">
        <v-list-item-title>Sign Out</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      signOutAction: "user/account/signOut"
    })
  }
};
</script>
