import ReportViolationCard from "@/components/common/ReportViolationCard";
import { mapActions } from "vuex";

export default {
  components: {
    ReportViolationCard
  },
  props: {
    id: {
      type: String,
      required: true
    },
    discussionId: {
      type: String,
      required: true
    },
    reply: {
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
    },
    datePosted: {
      type: String,
      required: true
    },
    likes: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showReportViolationCard: false,
      thumbClicked: false,
      currentLikes: this.likes,
      thumbColor: ""
    };
  },
  methods: {
    ...mapActions({
      toggleReplyLike: "discussion/reply/toggleReplyLike",
      validateAction: "common/securedActionValidation/validateAction"
    }),
    openReportViolationCard() {
      showReportViolationCard = !showReportViolationCard;
    },
    toggleLike() {
      this.validateAction({
        actionType: "like",
        postType: "reply",
        postOwnerId: this.userId
      })
        .then(response => {
          this.thumbClicked = !this.thumbClicked;

          this.toggleReplyLike({
            replyId: this.id,
            discussionId: this.discussionId,
            toggleType: this.thumbClicked ? "increment" : "decrement"
          })
            .then(response => {
              this.currentLikes = response;
              this.thumbColor = this.thumbClicked ? "amber accent-3" : "";
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
