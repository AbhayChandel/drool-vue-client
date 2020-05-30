<template
  ><v-container fill-height fluid style="max-width: 800px;" class="pa-0">
    <v-row style="height: 100%;" class="pa-0 ma-0">
      <!-- <v-col id="main-content-col" class="pa-0">
        <v-card>
          <VideoCard
            :key="videoPageData.id"
            :mode="videoPageData.mode"
            :videoId="videoPageData.id"
            :postType="videoPageData.type"
            :videoTitle="videoPageData.title"
            :sourceVideoId="videoPageData.sourceId"
            :productsTagged="videoPageData.productRefDtoList"
            :likes="videoPageData.likes"
            :datePosted="videoPageData.datePosted"
            :views="videoPageData.views"
            :videoDescription="videoPageData.description"
            :postOwnerUsername="videoPageData.userRefDto.username"
            :postOwnerId="videoPageData.userRefDto.id"
          />
          <div
            class="px-4 px-sm-5 px-md-8 mt-6 mt-md-8 mt-lg-10 mb-1 font-weight-bold"
          >
            {{ videoPageData.totalComments }} comments
          </div>
          <v-divider class="mx-3 mx-sm-5 mx-md-8 mb-4 mt-0"></v-divider>
          <v-row class="ma-0 pa-0 px-4 px-sm-5 px-md-8">
            <v-textarea
              ref="commentField"
              v-model="comment"
              placeholder="Add a comment here..."
              auto-grow
              rows="1"
              clearable
              @click.stop="unhideButtons"
              append-outer-icon="mdi-emoticon-outline"
              @click:append-outer="toggleEmojiPicker()"
              @focus="closeEmojiPicker"
            ></v-textarea>
          </v-row>
          <v-row class="ma-0 pa-0 px-4 px-sm-5 px-md-8"><EmojiPicker /></v-row>
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
            v-for="(commentCard, index) in videoPageData.videoCommentDtoList"
            :key="commentCard.id"
            :index="index"
            :id="commentCard.id"
            :comment="commentCard.comment"
            :likes="commentCard.likes"
            :datePosted="commentCard.datePosted"
            :userId="commentCard.userRefDto.id"
            :username="commentCard.userRefDto.username"
          />
        </v-card>
      </v-col> -->
      <no-ssr>
        <Editor />
      </no-ssr>
    </v-row>
  </v-container>
</template>

<script>
import Editor from "@/components/common/Editor";
export default {
  components: {
    Editor
  }
};
</script>

<style scoped>
.v-expansion-panel::before {
  box-shadow: none;
}
</style>
