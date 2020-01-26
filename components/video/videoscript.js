import { mapActions } from "vuex";

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
      comment: "",
      showButton: false,
      showLoading: false
    };
  },

  methods: {
    ...mapActions({
      validateAction: "common/securedActionValidation/validateAction",
      saveComment: "video/comment/saveComment"
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
    },
    postComment() {
      if (this.comment.length > 0) {
        this.showLoading = true;
        this.saveComment({
          /* discussionTopicId: this.discussionPageData.topicCard.topicDetails
            .topicId,
          reply: this.reply,
          userId: this.userDetails.userId */
        })
          .then(data => {
            //this.updateCommentList(data);
            this.updateCommentList({
              id: 10,
              comment: "This is dynamically added comment.",
              userDetails: {
                id: 51,
                username: "Test User"
              },
              likes: 5,
              datePosted: "26-09-2020"
            });
          })
          .catch(message => {
            console.log("error in componenet: " + message);
          });
        this.showLoading = false;
        this.showButton = false;
        this.reply = "";
      }
    },
    updateCommentList(newComment) {
      this.videoPageData.commentCardList.unshift({
        id: newComment.id,
        comment: newComment.comment,
        userDetails: {
          id: newComment.userDetails.id,
          username: newComment.userDetails.username
        },
        likes: newComment.likes,
        datePosted: newComment.datePosted
      });
    }
  }
};
