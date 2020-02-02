<template>
  <div>
    <v-autocomplete placeholder="Find product to review..."></v-autocomplete>
    <v-row class="pa-0 ma-0" v-if="nothing">
      products tagged
    </v-row>
  </div>
</template>

<script>
export default {};
</script>
