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
        v-if="!showSearchBox"
        class="pa-0 ma-0 pt-2 hidden-sm-and-up"
        justify="space-between"
      >
        <v-col cols="1" class="ma-0 pa-0" style="max-width:24px;"
          ><v-icon align-self="start" medium @click="toggleNavigationDrawer"
            >mdi-menu</v-icon
          ></v-col
        >
        <v-col class="d-flex justify-center pa-0 ma-0">
          <span
            id="logoSpan"
            class="title red--text text--darken-1 pl-5"
            v-if="showLogo"
            >Drool</span
          >
        </v-col>
        <v-col
          cols="2"
          class="ma-0 pa-0 d-flex justify-end"
          style="max-width:80px;"
        >
          <PostMenu />
          <v-icon
            v-if="showSearchIcon"
            medium
            @click="toggleSearchBoxDisplay"
            class="ml-2"
            >mdi-magnify</v-icon
          >
        </v-col>
      </v-row>
      <v-row class="pa-0 ma-0 hidden-sm-and-up" v-if="showSearchBox">
        <Autocomplete class="pt-3 px-2" />
        <v-icon
          v-if="showSearchBoxCloseIcon"
          @click="toggleSearchBoxDisplay"
          class="pa-0 mt-3"
          style="height:26px;"
          >mdi-close</v-icon
        >
      </v-row>
      <v-row class="pa-0 ma-0 hidden-xs-only" justify="space-between">
        <div class="title red--text text--darken-1 pt-2">Drool</div>
        <!-- <v-icon medium>mdi-magnify</v-icon> -->
        <Autocomplete class="px-8 pt-2" />
        <div>
          <v-btn
            small
            outlined
            @click="setDialogToOpenMutation"
            v-if="showLoginSignupBtn"
            class="mt-3"
            >Login/Join drool</v-btn
          >
          <UserMenu v-if="showUserAvatar" />
        </div>
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
