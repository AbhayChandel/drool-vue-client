<template>
  <v-container fill-height fluid style="max-width:1366px;" class="pa-3 ma-auto">
    <v-row style="height:100%;" justify="center" class="pa-0 ma-0">
      <!-- <v-col id="main-content-col" cols="12" sm="7" lg="9" class="pa-0 pr-2"> -->
      <v-col id="main-content-col" cols="12" sm="8" md="9" class="pa-0 pr-2">
        <QuestionCard
          :key="discussionPageData.topicCard.topicDetails.topicId"
          :id="discussionPageData.topicCard.topicDetails.topicId"
          :topic="discussionPageData.topicCard.topicDetails.topic"
          :userId="discussionPageData.topicCard.topicDetails.userId"
          :datePosted="discussionPageData.topicCard.topicDetails.datePosted"
          :dateLastActive="
            discussionPageData.topicCard.topicDetails.dateLastActive
          "
          :views="discussionPageData.topicCard.topicDetails.views"
          :likes="discussionPageData.topicCard.topicDetails.likes"
          :username="discussionPageData.topicCard.userCard.username"
        />
        <div style="padding-top:45px; padding-bottom:10px;">
          <h4>
            {{ discussionPageData.topicCard.topicDetails.replies }} Replies
          </h4>
        </div>
        <AnswerCard
          v-for="replyCard in discussionPageData.replyCardList"
          :key="replyCard.replyDetails.replyId"
          :id="replyCard.replyDetails.replyId"
          :reply="replyCard.replyDetails.reply"
          :userId="replyCard.replyDetails.userId"
          :likes="replyCard.replyDetails.likes"
          :username="replyCard.userCard.username"
        />
      </v-col>
      <!-- <v-col id="sidebar-col" cols="4" lg="3" class="hidden-xs-only pa-0 pl-2"> -->
      <v-col id="sidebar-col" cols="4" md="3" class="hidden-xs-only pa-0 pl-2">
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
  },
  props: {
    discussionPageData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
#sidebar-col {
  max-width: 350px;
}
</style>
