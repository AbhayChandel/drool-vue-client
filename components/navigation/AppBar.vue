<template>
  <v-app-bar app id="app-bar" elevation="1">
    <!-- Current padding to container is fine for max width(lg)
    But this need to be changed for smaller sizes-->

    <v-container
      fill-height
      fluid
      style="max-width:1366px;"
      class="pa-0 ma-auto"
    >
      <v-row
        align="start"
        justify="space-between"
        class="pa-0 ma-0 hidden-sm-and-up"
      >
        <v-icon medium @click="toggleNavigationDrawer" class="pt-3"
          >mdi-menu</v-icon
        >
        <span
          id="logoSpan"
          class="title pt-2 red--text text--darken-1"
          v-if="showLogo"
          >Drool</span
        >
        <Autocomplete v-if="showSearchBox" class="pt-1 px-2" />
        <v-icon
          v-if="showSearchIcon"
          medium
          @click="toggleSearchBoxDisplay"
          class="pt-3"
          >mdi-magnify</v-icon
        >
        <v-icon
          v-if="showSearchBoxCloseIcon"
          medium
          @click="toggleSearchBoxDisplay"
          class="pt-3"
          >mdi-close</v-icon
        >
      </v-row>
      <v-row align="start" class="pa-0 ma-0 hidden-xs-only">
        <v-col class="pa-0 pt-2 d-flex justify-start" cols="auto">
          <div class="title red--text text--darken-1">Drool</div>
        </v-col>
        <v-col class="px-8 py-0 pt-1 align-center d-flex justify-end">
          <!-- <v-icon medium>mdi-magnify</v-icon> -->
          <Autocomplete />
        </v-col>
        <v-col
          class="pa-0 pt-3 d-flex justify-end align-"
          cols="auto"
          v-if="!isUserAuthenticated"
        >
          <v-btn small outlined @click="setDialogToOpen"
            >Login/Join drool</v-btn
          >
        </v-col>
        <v-col
          class="pa-0 pr-5 d-flex justify-end align-"
          cols="auto"
          v-if="isUserAuthenticated"
        >
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
              <v-list-item @click="signOut">
                <v-list-item-title>Sign Out</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
#app-bar {
  padding: 0px;
  margin: 0px;
}
</style>

<script src="./appbarscript.js"></script>
