<template>
  <v-app-bar app id="app-bar">
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
        <!-- <v-col class="pa-0 d-flex justify-end" cols="3" xl="1"> -->
        <v-col class="pa-0 pt-3 d-flex justify-end align-" cols="auto">
          <v-btn small outlined>Login</v-btn>
          <v-btn small outlined class="ml-4">Join</v-btn>
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
