import { mapActions, mapState, mapGetters, mapMutations } from "vuex";

import TopicCard from "@/components/discussion/TopicCard";
import ReplyCard from "@/components/discussion/ReplyCard";
import SimilarDiscussionCard from "@/components/discussion/SimilarDiscussionsCard";

export default {
  components: {
    TopicCard,
    ReplyCard,
    SimilarDiscussionCard
  },
  props: {
    discussionPageData: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    showButton: false,
    showLoading: false,
    reply: ""
  }),
  methods: {
    ...mapActions({ saveReply: "discussion/reply/postReply" }),
    ...mapMutations({
      setDialogToOpen: "user/loginsignupdialog/setDialogToOpen"
    }),
    unhideButtons() {
      if (this.isUserAuthenticated) {
        this.showButton = true;
      } else {
        this.setDialogToOpen({ action: "post", postType: "reply" });
      }
    },
    hideButtons() {
      this.showButton = false;
    },
    postReply() {
      if (this.reply.length > 0) {
        this.showLoading = true;
        this.saveReply({
          discussionTopicId: this.discussionPageData.topicCard.topicDetails
            .topicId,
          reply: this.reply,
          userId: this.userDetails.userId
        })
          .then(data => {
            this.updateReplyList(data);
          })
          .catch(message => {
            console.log("error in componenet: " + message);
          });
        this.showLoading = false;
        this.showButton = false;
        this.reply = "";
      }
    },
    updateReplyList(newReply) {
      this.discussionPageData.replyCardList.unshift({
        replyDetails: {
          replyId: newReply.id,
          reply: newReply.reply,
          userId: newReply.userId,
          likes: newReply.likes,
          datePosted: newReply.datePosted
        },
        userCard: { username: this.userDetails.username }
      });
    }
  },
  computed: {
    ...mapState("user/account", ["userDetails"]),
    ...mapGetters("user/account", ["isUserAuthenticated"])
  }
};
