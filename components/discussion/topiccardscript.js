import { mapActions } from "vuex";

export default {
  components: {},
  props: {
    id: {
      type: Number,
      required: true
    },
    topic: {
      type: String,
      required: true
    },
    userId: {
      type: Number,
      required: true
    },
    likes: {
      type: Number,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      thumbClicked: false,
      currentLikes: this.likes,
      thumbColor: ""
    };
  },
  methods: {
    ...mapActions({
      toggleTopicLike: "discussion/topic/toggleTopicLike",
      validateAction: "common/securedActionValidation/validateAction"
    }),
    toggleLike() {
      this.validateAction({
        actionType: "like",
        postType: "topic",
        postOwnerId: this.userId
      })
        .then(response => {
          console.log("thumbClicked: " + this.thumbClicked);
          this.thumbClicked = !this.thumbClicked;
          console.log("thumbClicked: " + this.thumbClicked);

          this.toggleTopicLike({
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
  computed: {
    getLikes() {
      return this.currentLikes;
    },
    getThumbColor() {
      return this.thumbColor;
    }
  }
};
