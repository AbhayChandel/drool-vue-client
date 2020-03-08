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
      postId: this.videoPageData.videoData.id,
      postType: this.videoPageData.videoData.type,
      postMedium: "video",
      postTitle: this.videoPageData.videoData.title,
      userDetails: {
        id: this.videoPageData.videoData.userRefDto.id,
        username: this.videoPageData.videoData.userRefDto.username
      },
      likes: this.videoPageData.videoData.likes,
      datePosted: this.videoPageData.videoData.datePosted,
      views: this.videoPageData.videoData.views,
      sourceVideoId: this.videoPageData.videoData.sourceId,
      videoDescription: this.videoPageData.videoData.description
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
      if (this.videoPageData.videoCommentDtoList == null) {
        this.videoPageData.videoCommentDtoList = [];
      }
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
