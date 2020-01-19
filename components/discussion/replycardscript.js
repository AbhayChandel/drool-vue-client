import ReportViolationCard from "@/components/common/ReportViolationCard";
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";

export default {
  components: {
    ReportViolationCard
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    reply: {
      type: String,
      required: true
    },
    userId: {
      type: Number,
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
      type: Number,
      required: true
    }
  },
  data: () => ({
    showReportViolationCard: false,
    thumbClicked: false
  }),
  methods: {
    ...mapActions({ toggleReplyLike: "discussion/reply/toggleReplyLike" }),
    ...mapMutations({
      setDialogToOpen: "user/loginsignupdialog/setDialogToOpen"
    }),
    openReportViolationCard() {
      showReportViolationCard = !showReportViolationCard;
    },
    toggleLike() {
      if (this.isUserAuthenticated) {
        if (this.userId != this.userDetails.userId) {
          this.thumbClicked = !this.thumbClicked;

          this.toggleReplyLike({
            postId: this.id,
            toggleType: this.thumbClicked ? "increment" : "decrement"
          })
            .then(response => {
              if (this.thumbClicked) {
                this.likes++;
              } else {
                this.likes--;
              }
            })
            .catch(message => {
              console.log("error in componenet: " + message);
            });
        }
      } else {
        this.setDialogToOpen({ action: "like", postType: "reply" });
      }
    }
  },
  computed: {
    ...mapState("user/account", ["userDetails"]),
    ...mapGetters("user/account", ["isUserAuthenticated"])
  }
};
