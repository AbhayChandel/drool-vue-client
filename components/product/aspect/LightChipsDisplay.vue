<template>
  <v-card class="aspectCardStyle" style="width:100%; height:100%">
    <DisplayTitle :title="aspectData.title" />
    <TotalVotes :totalVotes="aspectData.votes" />
    <v-card-text class="pl-3">
      <v-chip
        v-for="option in aspectData.options"
        :key="option.name"
        class="ma-2 ml-0"
        color="amber lighten-5"
      >
        <v-avatar left class="amber lighten-4">{{ option.votes }} </v-avatar>
        {{ option.name }}
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
