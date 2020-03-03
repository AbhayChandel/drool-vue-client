<template>
  <v-container fill-height fluid style="max-width:1366px;" class="pa-0">
    <TopMenu />
    <v-row style="height:100%;" class="pa-0 ma-0">
      <v-col id="menu-col" class="pa-0"><LeftMenu /></v-col>
      <v-col id="main-content-col" class="pa-0"></v-col>
      <v-col id="others-col" class="pa-0"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import LeftMenu from "@/components/profile/LeftMenu";
import TopMenu from "@/components/profile/TopMenu";
export default {
  components: {
    LeftMenu,
    TopMenu
  }
};
</script>

<style></style>
