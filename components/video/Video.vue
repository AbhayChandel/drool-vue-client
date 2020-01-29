<template
  ><v-container fill-height fluid style="max-width:1366px;" class="pa-0">
    <v-row style="height:100%;" class="pa-0 ma-0">
      <v-col id="main-content-col" class="pa-0">
        <v-card>
          <VideoCard
            :key="videoPageData.videoCard.videoDetails.videoId"
            :videoId="videoPageData.videoCard.videoDetails.videoId"
            :postType="videoPageData.videoCard.videoDetails.postType"
            :videoTitle="videoPageData.videoCard.videoDetails.title"
            :sourceVideoId="videoPageData.videoCard.videoDetails.sourceVideoId"
            :likes="videoPageData.videoCard.videoDetails.likes"
            :datePosted="videoPageData.videoCard.videoDetails.datePosted"
            :views="videoPageData.videoCard.videoDetails.views"
            :videoDescription="videoPageData.videoCard.videoDetails.description"
            :postOwnerUsername="videoPageData.videoCard.userCard.username"
            :postOwnerId="videoPageData.videoCard.userCard.userId"
          />
          <div
            class="px-4 px-sm-5 px-md-8 mt-6 mt-md-8 mt-lg-10 mb-1 font-weight-bold"
          >
            {{ videoPageData.commentCardList.length }} comments
          </div>
          <v-divider class="mx-3 mx-sm-5 mx-md-8 mb-4 mt-0"></v-divider>
          <v-row class="ma-0 pa-0 px-4 px-sm-5 px-md-8">
            <v-textarea
              v-model="comment"
              placeholder="Add a comment here..."
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
            class="mb-8 mr-1 ml-4 ml-sm-5 ml-md-8"
            :loading="showLoading"
            @click="postComment"
            ><v-icon size="20" color="#ee8f3b" class="mr-1"
              >mdi-message-draw</v-icon
            >post</v-btn
          >
          <v-btn
            @click="hideButtons"
            text
            outlined
            subtitle-1
            v-if="showButton"
            class="mb-8"
            >Cancel</v-btn
          >
          <CommentCard
            v-for="commentCard in videoPageData.commentCardList"
            :key="commentCard.videoCommentView.videoCommentId"
            :commentId="commentCard.videoCommentView.videoCommentId"
            :comment="commentCard.videoCommentView.comment"
            :likes="commentCard.videoCommentView.likes"
            :datePosted="commentCard.videoCommentView.datePosted"
            :userId="commentCard.userCard.userId"
            :username="commentCard.userCard.username"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./videoscript.js"></script>

<style scoped>
.v-expansion-panel::before {
  box-shadow: none;
}
</style>
