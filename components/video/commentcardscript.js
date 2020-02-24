import { mapActions } from "vuex";

export default {
  data() {
    return {
      thumbClicked: false,
      currentLikes: this.likes,
      thumbColor: ""
    };
  },
  computed: {
    getLikes() {
      return this.currentLikes;
    },
    getThumbColor() {
      return this.thumbColor;
    }
  },
  methods: {
    ...mapActions({
      validateAction: "common/securedActionValidation/validateAction",
      saveVideoCommentLike: "video/comment/saveCommentLike"
    }),

    toggleLike() {
      this.validateAction({
        actionType: "like",
        postType: "comment",
        postOwnerId: this.userId
      })
        .then(response => {
          console.log("thumbClicked: " + this.thumbClicked);
          this.thumbClicked = !this.thumbClicked;
          console.log("thumbClicked: " + this.thumbClicked);

          this.saveVideoCommentLike({
            commentId: this.id,
            comment: this.comment,
            likes: this.currentLikes,
            toggleType: this.thumbClicked ? "increment" : "decrement"
          })
            .then(response => {
              if (this.thumbClicked) {
                this.thumbColor = "amber accent-3";
              } else {
                this.thumbColor = "";
              }
              this.currentLikes = response;
            })
            .catch(message => {
              console.log("error in componenet: " + message);
            });
        })
        .catch(message => {
          console.log("error in componenet: " + message);
        });
    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    likes: {
      type: String,
      required: true
    },
    datePosted: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
};
