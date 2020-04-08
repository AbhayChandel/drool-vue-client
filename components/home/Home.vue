<template>
  <v-container fill-height fluid style="max-width: 800px;" class="pa-0 ma-auto">
    <v-row style="height: 100%;" justify="center" class="pa-0 ma-0 mt-4">
      <v-col id="main-content-col" cols="12" sm="8" class="pa-0 pr-2">
        <ActivityFeed />
      </v-col>
      <v-col id="sidebar-col" cols="4" sm="4" class="hidden-xs-only pa-0 pl-2">
        <SimilarDiscussionCard />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ActivityFeed from "@/components/home/ActivityFeed";
import SimilarDiscussionCard from "@/components/discussion/SimilarDiscussionsCard";
export default {
  components: {
    ActivityFeed,
    SimilarDiscussionCard,
  },
};
</script>
