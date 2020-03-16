<template
  ><v-card-subtitle class="pb-1 pl-3  indigo--text text--lighten-3">
    Total Votes: {{ totalVotes }}
  </v-card-subtitle>
</template>
<script>
export default {
  props: {
    totalVotes: {
      type: Number,
      required: true
    }
  }
};
</script>
