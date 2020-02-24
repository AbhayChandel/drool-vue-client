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
      postCommentAction: "video/comment/postComment",
      savePostAction: "common/post/savePost"
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
        this.postCommentAction({
          videoId: this.videoPageData.id,
          videoTitle: this.videoPageData.title,
          postType: this.videoPageData.type,
          comment: this.comment
        })
          .then(data => {
            this.updateCommentList(data);
          })
          .catch(message => {
            console.log("error in componenet: " + message);
          });
        this.showLoading = false;
        this.hideButtons();
      }
    },
    updateCommentList(newComment) {
      this.videoPageData.videoCommentDtoList.unshift({
        id: newComment.id,
        comment: newComment.comment,
        userRefDto: {
          id: newComment.userRefDto.id,
          username: newComment.userRefDto.username
        },
        likes: newComment.likes,
        datePosted: newComment.datePosted
      });
    }
  },
  computed: {
    getCommentCount() {
      return this.videoPageData.videoCommentDtoList == null
        ? 0
        : this.videoPageData.videoCommentDtoList.length;
    }
  }
};
