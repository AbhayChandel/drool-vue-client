import { mapActions } from "vuex";

import YoutubePlayer from "@/components/video/YoutubePlayer";
import CommentCard from "@/components/video/CommentCard";

export default {
  components: {
    YoutubePlayer,
    CommentCard
  },
  data() {
    return {
      showAsAccordian: true,
      showAsFlat: true,
      showFullDescFlag: false,
      thumbClicked: false,
      currentLikes: this.likes,
      thumbColor: "",
      description:
        "We have a new brand in town, that obviously means it is review time? Today, I will be swatching and reviewing all Kay Beauty products under the sun and to make decisions easier for you guys. I have swatched them on my bare skin as well as with makeup on after neutralizing my lip. We have a new brand in town, that obviously means it is review time? Today, I will be swatching and reviewing all Kay Beauty products under the sun and to make decisions easier for you guys. I have swatched them on my."
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
  }
};
