<template>
  <div style="width:100%;">
    <v-tabs
      grow
      slider-color="black"
      id="profileMenuBar"
      v-model="profileMenuTabs"
    >
      <v-tab :key="profile">
        Profile
      </v-tab>
      <v-tab :key="contributions">
        Contributions
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="profileMenuTabs">
      <v-tab-item :key="profile">
        <v-card flat>
          <v-card-text>This is profile page</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item :key="contributions">
        <v-card flat>
          <v-card-text>This is contributions page</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
#profileMenuBar .v-slide-group {
  display: -webkit-box;
}
</style>
