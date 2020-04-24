<template>
  <v-card class="answer-card">
    <!-- <v-container fluid style class="py-1 pl-2 pr-4 pr-sm-6"> -->
    <v-container fluid style class="pb-4 pl-5 pr-5 pr-sm-6">
      <v-list class="py-0">
        <v-list-item class="pa-0">
          <v-list-item-content class="py-0">
            <v-list-item-title
              ><nuxt-link :to="'/profile/' + userId + ''">
                <span class="userProfileLinkFont">{{ username }}</span>
              </nuxt-link></v-list-item-title
            >
            <v-list-item-subtitle>
              Replied:&nbsp;{{ datePosted }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-icon>
            <CommentMenu
              :postOwnerId="userId"
              @performMenuAction="delegateMenuAction($event)"
            />
          </v-list-item-icon>
        </v-list-item>
      </v-list>
      <v-divider class="mb-4 mb-sm-6"></v-divider>
      <v-row justify="left" class="paddingMarginZero">
        <v-col
          id="vote-col"
          cols="1"
          md="1"
          class="pa-0 d-flex flex-column align-center"
          style="max-width:60px; min-width:40px;"
        >
          <v-icon size="24" @click="toggleLike" :color="getThumbColor"
            >mdi-thumb-up</v-icon
          >
          <span>{{ getLikes }}</span>
        </v-col>
        <v-col id="question-col" cols="10" md="11" class="pa-0">
          <v-row class="ma-0 replyFont">
            {{ reply }}
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import ReportViolationCard from "@/components/common/ReportViolationCard";
import CommentMenu from "@/components/video/CommentMenu";
import { mapActions, mapMutations } from "vuex";

export default {
  components: {
    ReportViolationCard,
    CommentMenu
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    discussionId: {
      type: String,
      required: true
    },
    discussionTitle: {
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
            discussionTitle: this.discussionTitle,
            reply: this.reply,
            likes: this.likes,
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
    },
    ...mapMutations({
      setReplyDetailsMutation: "discussion/reply/setReplyDetails",
      setViolationDialogToOpen: "common/violation/setDialogToOpen"
    }),
    delegateMenuAction(action) {
      if (action == "edit" || action == "delete") {
        this.setReplyDetailsMutation({
          action: action,
          index: this.index,
          id: this.id,
          reply: this.reply,
          datePosted: this.datePosted
        });
      } else {
        this.setViolationDialogToOpen("reply");
      }
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
</script>

<style scoped>
.replyFont {
  font-size: 0.9rem;
}

.answer-card {
  padding-bottom: 15px;
  margin-bottom: 30px;
}

.v-chip {
  font-size: 12px;
  padding: 4px 10px 4px 10px;
  margin-left: 8px;
  margin-bottom: 8px;
}
</style>
