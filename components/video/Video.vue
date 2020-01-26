<template
  ><v-container fill-height fluid style="max-width:1366px;" class="pa-0">
    <v-row style="height:100%;" class="pa-0 ma-0">
      <v-col id="main-content-col" class="pa-0">
        <v-card>
          <VideoCard
            :key="videoPageData.videoCard.id"
            :videoId="videoPageData.videoCard.id"
            :videoTitle="videoPageData.videoCard.title"
            :likes="videoPageData.videoCard.likes"
            :datePosted="videoPageData.videoCard.datePosted"
            :views="videoPageData.videoCard.views"
            :videoDescription="videoPageData.videoCard.description"
            :postOwnerUsername="videoPageData.videoCard.postOwner.username"
            :postOwnerId="videoPageData.videoCard.postOwner.id"
          />
          <div
            class="px-4 px-sm-5 px-md-8 mt-6 mt-md-8 mt-lg-10 mb-1 font-weight-bold"
          >
            10 comments
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
            :key="commentCard.id"
            :commentId="commentCard.id"
            :comment="commentCard.comment"
            :likes="commentCard.likes"
            :datePosted="commentCard.datePosted"
            :userId="commentCard.userDetails.id"
            :username="commentCard.userDetails.username"
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
