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
          <v-icon
            v-if="showSearchIcon"
            medium
            @click="toggleSearchBoxDisplay"
            class=""
            >mdi-magnify</v-icon
          >
          <PostMenu />
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
          <v-btn small outlined @click="setDialogToOpenMutation"
            >Login/Join drool</v-btn
          >
        </v-col>
        <v-col
          class="pa-0 pr-5 d-flex justify-end align-"
          cols="auto"
          v-if="isUserAuthenticated"
        >
          <UserMenu />
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
