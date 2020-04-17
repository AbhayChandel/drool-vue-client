<template>
  <v-menu offset-y left>
    <template v-slot:activator="{ on }">
      <v-btn text icon color="grey darken-1" v-on="on">
        <v-icon large>mdi-account-circle</v-icon>
      </v-btn>
    </template>

    <v-list min-width="275">
      <v-list-item
        ><v-list-item-title class="subtitle-1 my-1">
          <span class="subtitle-1 font-weight-medium ml-1">{{
            userDetails.username
          }}</span></v-list-item-title
        >
      </v-list-item>
      <v-divider class="mb-2"></v-divider>
      <v-list-item>
        <v-list-item-action class="ma-0 mr-3">
          <v-icon>mdi-account-box</v-icon>
        </v-list-item-action>
        <v-list-item-title>
          <nuxt-link :to="{ name: 'profile', params: { id: userDetails.id } }"
            >My Profile</nuxt-link
          >
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-action class="ma-0 mr-3">
          <v-icon>mdi-cog-outline</v-icon>
        </v-list-item-action>
        <v-list-item-title>Account Settings</v-list-item-title>
      </v-list-item>
      <v-list-item @click="signOutAction">
        <v-list-item-action class="ma-0 mr-3">
          <v-icon>mdi-logout </v-icon>
        </v-list-item-action>
        <v-list-item-title>Sign Out</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions({
      signOutAction: "user/account/signOut"
    })
  },
  computed: {
    ...mapState("user/account", ["userDetails"])
  }
};
</script>
