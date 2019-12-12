<template>
  <v-app-bar app id="app-bar">
    <v-container fill-height fluid style="max-width:1366px;" class="px-3 py-0 ma-auto">
      <v-row align="center" justify="space-between" class="pa-0 ma-0">
        <v-icon large @click="toggleNavigationDrawer">mdi-menu</v-icon>
        <span class="title" style="color:#ee8f3b">Drool</span>
        <v-icon large>mdi-magnify</v-icon>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
</style>

<script>
export default {
  data: () => ({}),

  methods: {
    toggleNavigationDrawer() {
      this.$bus.$emit("toggle-nav-drawer");
    }
  },
  computed: {}
};
</script>