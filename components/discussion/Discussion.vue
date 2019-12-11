<template>
  <v-container fill-height fluid style="max-width:1366px;">
    <v-row style="height:100%;" class="ma-0" justify="center">
      <v-col id="main-content-col" cols="12" sm="7" class="pa-0">
        <QuestionCard />
        <div style="padding-top:45px; padding-bottom:10px;">
          <h4>15 Replies</h4>
        </div>
        <AnswerCard />
        <AnswerCard />
      </v-col>
      <v-col id="sidebar-col" cols="4" class="hidden-xs-only pa-0 ml-6">
        <SimilarDiscussionCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import QuestionCard from "@/components/discussion/QuestionCard";
import AnswerCard from "@/components/discussion/AnswerCard";
import SimilarDiscussionCard from "@/components/discussion/SimilarDiscussionsCard";
export default {
  components: {
    QuestionCard,
    AnswerCard,
    SimilarDiscussionCard
  }
};
</script>

<style scoped>
#sidebar-col {
  max-width: 275px;
}
</style>