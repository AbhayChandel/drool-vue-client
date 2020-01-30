import { mapActions } from "vuex";

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
    showFullDesc() {
      return this.showFullDescFlag;
    },
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
        postOwnerId: "100011"
      })
        .then(response => {
          console.log("thumbClicked: " + this.thumbClicked);
          this.thumbClicked = !this.thumbClicked;
          console.log("thumbClicked: " + this.thumbClicked);

          this.saveVideoLike({
            postId: this.id,
            toggleType: this.thumbClicked ? "increment" : "decrement"
          })
            .then(response => {
              if (this.thumbClicked) {
                this.currentLikes++;
                this.thumbColor = "amber accent-3";
              } else {
                this.currentLikes--;
                this.thumbColor = "";
              }
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
