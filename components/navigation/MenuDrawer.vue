<template>
  <v-navigation-drawer
    id="navigationDrawer"
    :value="showNavigationDrawer"
    absolute
    temporary
    width="70%"
    style="min-width:260px;"
  >
    <v-container class="px-4">
      <v-row justify="end">
        <v-col class="d-flex justify-end py-0">
          <v-icon size="32" @click="toggleNavigationDrawerVisibility"
            >mdi-close</v-icon
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col class="subtitle-1 pb-1 d-block">
          Welcome back,
          <span
            class="title red--text text--darken-1"
            v-if="!isUserAuthenticated"
            >drooler</span
          >
          <span
            v-if="isUserAuthenticated"
            class="title red--text text--darken-1"
            >{{ userDetails.username }}</span
          >
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row v-if="!isUserAuthenticated">
        <v-col class="title">
          <v-list-item class="pa-0">
            <v-list-item-content @click="setDialogToOpen">
              Sign In/Join drool
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
      <v-row v-if="isUserAuthenticated">
        <v-col class="title">
          <v-list-item class="pa-0">
            <v-list-item-content>
              <nuxt-link to="/signup" class="plainNuxtLinkStyle"
                >Home</nuxt-link
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="pa-0">
            <v-list-item-content>
              <nuxt-link to="/login" class="plainNuxtLinkStyle"
                >My Profile</nuxt-link
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="pa-0">
            <v-list-item-content>
              <nuxt-link to="/login" class="plainNuxtLinkStyle"
                >Account Settings</nuxt-link
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="pa-0">
            <v-list-item-content>
              <nuxt-link to="/login" class="plainNuxtLinkStyle"
                >Sign Out</nuxt-link
              >
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script src="./menudrawerscript.js"></script>

<style scoped></style>
