<template>
  <v-card class="aspectCardStyle" style="width:100; height:100%">
    <v-card-title class="pa-3 indigo--text text--darken-4">{{
      aspectData.title
    }}</v-card-title>
    <v-card-subtitle class="pb-1 pl-3 indigo--text text--lighten-3">
      Total Feeds: {{ aspectData.totalFeeds }}
    </v-card-subtitle>
    <v-card-text class="pl-3">
      <v-chip class="ma-2 ml-0" color="green" text-color="white">
        <v-avatar left class="green darken-4">
          {{ aspectData.options[0].votes }}
        </v-avatar>
        {{ aspectData.options[0].name }}
      </v-chip>
      <v-chip class="ma-2 ml-0" color="red" text-color="white">
        <v-avatar left class="red darken-4">
          {{ aspectData.options[1].votes }}
        </v-avatar>
        {{ aspectData.options[1].name }}
      </v-chip>
      <v-chip class="ma-2 ml-0" color="grey" text-color="white">
        <v-avatar left class="grey darken-4">
          {{ aspectData.options[2].votes }}
        </v-avatar>
        {{ aspectData.options[2].name }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    aspectData: {
      type: Object,
      required: true
    }
  }
};
</script>
