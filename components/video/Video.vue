<template
  ><v-container fill-height fluid style="max-width: 800px;" class="pa-0">
    <v-row style="height: 100%;" class="pa-0 ma-0">
      <v-col id="main-content-col" class="pa-0">
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
            {{ getCommentCount }} comments
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

import VideoCard from "@/components/video/VideoCard";
import CommentCard from "@/components/video/CommentCard";

export default {
  components: {
    VideoCard,
    CommentCard
  },
  props: {
    videoPageData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      id: null,
      comment: "",
      showButton: false,
      showLoading: false
    };
  },
  created() {
    this.savePostAction({
      postId: this.videoPageData.id,
      postType: this.videoPageData.type,
      postMedium: "video",
      postTitle: this.videoPageData.title,
      userDetails: {
        id: this.videoPageData.userRefDto.id,
        username: this.videoPageData.userRefDto.username
      },
      likes: this.videoPageData.likes,
      datePosted: this.videoPageData.datePosted,
      views: this.videoPageData.views,
      sourceVideoId: this.videoPageData.sourceId,
      videoDescription: this.videoPageData.description
    });
  },
  methods: {
    ...mapActions({
      validateAction: "common/securedActionValidation/validateAction",
      snackbarAction: "common/alertsnackbar/openCloseSnackbar",
      postCommentAction: "video/comment/postComment",
      deleteCommentAction: "video/comment/deleteComment",
      savePostAction: "common/post/savePost"
    }),
    ...mapMutations({
      setCommentDetailsMutation: "video/comment/setCommentDetails"
    }),
    unhideButtons() {
      this.validateAction({
        actionType: "post",
        postType: "comment"
      })
        .then(response => {
          this.showButton = true;
        })
        .catch(message => {
          console.log("error in componenet: " + message);
        });
    },
    hideButtons() {
      this.showButton = false;
      this.comment = "";
    },
    postComment() {
      if (this.comment.length > 0) {
        this.showLoading = true;
        var id = null;
        if (this.commentDetails != null) {
          id = this.commentDetails.id;
        }
        this.postCommentAction({
          videoId: this.videoPageData.id,
          videoTitle: this.videoPageData.title,
          postType: this.videoPageData.type,
          comment: this.comment,
          id: id
        })
          .then(data => {
            this.updateCommentList(data);
          })
          .catch(message => {
            console.log("error in componenet: " + message);
            this.snackbarAction(
              "Something went wrong. Please try again in some time."
            );
          });
        this.showLoading = false;
        this.hideButtons();
      }
    },
    updateCommentList(comment) {
      if (this.commentDetails != null) {
        if (this.commentDetails.action === "edit") {
          this.deleteCommentFromList();

          comment.datePosted = this.commentDetails.datePosted;
          this.insertCommentToList(comment);
        }
        if (this.commentDetails.action === "delete") {
          this.deleteCommentFromList();
        }
      } else {
        if (this.videoPageData.videoCommentDtoList == null) {
          this.videoPageData.videoCommentDtoList = [];
        }
        this.insertCommentToList(comment);
      }

      this.setCommentDetailsMutation(null);
    },
    insertCommentToList(comment) {
      this.videoPageData.videoCommentDtoList.unshift({
        id: comment.id,
        comment: comment.comment,
        userRefDto: {
          id: comment.userRefDto.id,
          username: comment.userRefDto.username
        },
        likes: comment.likes,
        datePosted: comment.datePosted
      });
    },
    deleteCommentFromList() {
      if (this.commentDetails != null) {
        this.videoPageData.videoCommentDtoList.splice(
          this.commentDetails.index,
          1
        );
      }
    },
    sendDeleteCommentRequest() {
      var id = null;
      if (this.commentDetails != null) {
        id = this.commentDetails.id;
      }
      this.deleteCommentAction({
        videoId: this.videoPageData.id,
        videoTitle: this.videoPageData.title,
        postType: this.videoPageData.type,
        comment: this.comment,
        id: id
      })
        .then(data => {
          this.updateCommentList(data);
        })
        .catch(message => {
          console.log("error in componenet: " + message);
          this.snackbarAction(
            "Something went wrong. Please try again in some time."
          );
        });
    }
  },
  computed: {
    ...mapState("video/comment", ["commentDetails"]),
    getCommentCount() {
      return this.videoPageData.videoCommentDtoList == null
        ? 0
        : this.videoPageData.videoCommentDtoList.length;
    }
  },
  watch: {
    commentDetails: function(commentDetails) {
      if (commentDetails != null) {
        if (commentDetails.action === "edit") {
          this.comment = commentDetails.comment;
          this.unhideButtons();
          if (typeof this.$refs["commentField"].$refs.input !== "undefined") {
            this.$refs["commentField"].$refs.input.focus();
          }
        } else if (commentDetails.action === "delete") {
          this.sendDeleteCommentRequest();
        }
      }
    }
  }
};
</script>

<style scoped>
.v-expansion-panel::before {
  box-shadow: none;
}
</style>
