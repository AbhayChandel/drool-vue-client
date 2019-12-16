<template>
  <v-navigation-drawer id="navigationDrawer" :value="showNavigationDrawer" absolute temporary>
    <v-container class="px-4">
      <v-row justify="end">
        <v-col class="d-flex justify-end py-0">
          <v-icon size="32" @click="toggleNavigationDrawerVisibility">mdi-close</v-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span class="title pb-2 d-block">Welcome to drool</span>
          <v-divider></v-divider>
          <v-list-item class="pa-0 pt-4">
            <v-list-item-content class="headline">
              <nuxt-link to="/signup" class="plainNuxtLinkStyle">Join</nuxt-link>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="pa-0">
            <v-list-item-content class="headline">
              <nuxt-link to="/login" class="plainNuxtLinkStyle">Sign In</nuxt-link>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    showNavigationDrawer: false
  }),

  methods: {
    toggleNavigationDrawerVisibility() {
      this.showNavigationDrawer = !this.showNavigationDrawer;
    }
  },
  computed: {},
  mounted() {
    this.$bus.$on("toggle-nav-drawer", this.toggleNavigationDrawerVisibility);
  }
};
</script>

<style scoped>
</style>