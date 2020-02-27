import { mapActions, mapState, mapMutations } from "vuex";

import YoutubePlayer from "@/components/video/YoutubePlayer";

export default {
  components: {
    YoutubePlayer
  },
  data() {
    return {
      showFullDescFlag: false,
      thumbClicked: false,
      currentLikes: this.likes,
      thumbColor: ""
    };
  },
  computed: {
    ...mapState("user/account", ["userDetails"]),
    showFullDesc() {
      return this.showFullDescFlag;
    },
    getLikes() {
      return this.currentLikes;
    },
    getThumbColor() {
      return this.thumbColor;
    },
    showVideoEditButton() {
      return (
        this.userDetails != null && this.userDetails.userId == this.postOwnerId
      );
    }
  },
  methods: {
    ...mapMutations({
      setDialogToOpen: "common/postdialogstore/setDialogToOpen"
    }),
    ...mapActions({
      validateAction: "common/securedActionValidation/validateAction",
      saveVideoLike: "video/video/saveVideoLike"
    }),
    enableCompleteDesc() {
      this.showFullDescFlag = true;
    },
    disableCompleteDesc() {
      this.showFullDescFlag = false;
    },
    toggleLike() {
      this.validateAction({
        actionType: "like",
        postType: "video",
        postOwnerId: this.postOwnerId
      })
        .then(response => {
          console.log("thumbClicked: " + this.thumbClicked);
          this.thumbClicked = !this.thumbClicked;
          console.log("thumbClicked: " + this.thumbClicked);

          this.saveVideoLike({
            videoId: this.videoId,
            videoTitle: this.videoTitle,
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
    },
    openPostDialog() {
      this.validateAction({
        actionType: "edit",
        postType: this.postType,
        postOwnerId: this.postOwnerId
      })
        .then(response => {
          this.setDialogToOpen({
            type: this.postType,
            mode: "edit",
            postData: {
              id: this.videoId,
              title: this.videoTitle,
              sourceVideoId: this.sourceVideoId,
              description: this.videoDescription,
              productsTagged: this.productsTagged
            }
          });
        })
        .catch(message => {
          console.log("error in componenet: " + message);
        });
    }
  },
  props: {
    videoId: {
      type: String,
      required: true
    },
    postType: {
      type: String,
      required: true
    },
    videoTitle: {
      type: String,
      required: true
    },
    sourceVideoId: {
      type: String,
      required: true
    },
    productsTagged: {
      type: Array,
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
    views: {
      type: String,
      required: true
    },
    videoDescription: {
      type: String,
      required: true
    },
    postOwnerId: {
      type: String,
      required: true
    },
    postOwnerUsername: {
      type: String,
      required: true
    }
  }
};
