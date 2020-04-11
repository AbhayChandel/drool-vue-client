<template>
  <v-container fill-height fluid style="max-width: 800px;" class="pa-3 ma-auto">
    <v-row style="height: 100%;" justify="center" class="pa-0 ma-0">
      <v-col id="main-content-col" cols="12" sm="8" class="pa-0 pr-2">
        <v-row class="mt-4 mb-1 d-flex flex-row justify-space-between">
          <div cols="2" class="pa-0 ml-3 font-weight-bold">
            Topic
          </div>
          <div class="mr-3 d-flex flex-row">
            <div class="activityDetailsValueFont pa-0 mr-3">
              <span class="activityDetailsLabelFont">Posted:</span>&nbsp;{{
                discussionPageData.datePosted
              }}
            </div>
            <div class="activityDetailsValueFont pa-0 mr-md-3">
              <span class="activityDetailsLabelFont">views:</span>&nbsp;{{
                discussionPageData.views
              }}
            </div>
            <div class="activityDetailsValueFont pa-0 d-none d-md-flex">
              <span class="activityDetailsLabelFont">Last active:</span>&nbsp;{{
                discussionPageData.dateLastActive
              }}
            </div>
          </div>
        </v-row>
        <v-divider class="mb-4 mt-0"></v-divider>
        <TopicCard
          :key="discussionPageData.id"
          :id="discussionPageData.id"
          :topic="discussionPageData.title"
          :userId="discussionPageData.user.id"
          :likes="discussionPageData.likes"
          :username="discussionPageData.user.username"
        />
        <div class="mt-6 mt-md-8 mt-lg-10 mb-1 font-weight-bold">
          {{ discussionPageData.replies }} Replies
        </div>
        <v-divider class="mb-4 mt-0"></v-divider>
        <v-row class="ma-0 pa-0">
          <v-textarea
            v-model="reply"
            placeholder="Write your reply here..."
            auto-grow
            rows="1"
            clearable
            @click.stop="unhideButtons"
          ></v-textarea>
        </v-row>
        <v-btn
          text
          outlined
          subtitle-1
          v-if="showButton"
          class="mb-8 mr-1"
          :loading="showLoading"
          @click="postReply"
          ><v-icon size="20" color="#ee8f3b" class="mr-1"
            >mdi-message-draw</v-icon
          >post</v-btn
        >
        <v-btn
          text
          outlined
          subtitle-1
          v-if="showButton"
          class="mb-8"
          @click="hideButtons"
          >Cancel</v-btn
        >

        <ReplyCard
          v-for="reply in discussionPageData.replyList"
          :key="reply.id"
          :id="reply.id"
          :discussionId="discussionPageData.id"
          :reply="reply.reply"
          :userId="reply.user.id"
          :likes="reply.likes"
          :datePosted="reply.datePosted"
          :username="reply.user.username"
        />
      </v-col>
      <v-col id="sidebar-col" cols="4" class="hidden-xs-only pa-0 pl-2">
        <SimilarDiscussionCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./discussionscript.js"></script>

<style scoped>
#sidebar-col {
  max-width: 350px;
}
</style>
