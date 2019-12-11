<template>
  <v-app>
    <v-content>
      <Discussion />
    </v-content>
  </v-app>
</template>

<script>
import Discussion from "@/components/discussion/Discussion";
export default {
  layout: "headerless-layout",
  components: {
    Discussion
  }
};
</script>
