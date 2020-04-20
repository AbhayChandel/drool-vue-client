<template>
  <v-card class="answer-card">
    <!-- <v-container fluid style class="py-1 pl-2 pr-4 pr-sm-6"> -->
    <v-container fluid style class="pt-6 pb-4 pl-5 pr-5 pr-sm-6">
      <!-- <v-row justify="end" class="paddingMarginZero reportMenuRowHeight">
        <CommentMenu
          :postOwnerId="userId"
          @performMenuAction="delegateMenuAction($event)"
        />
      </v-row>
      <v-row class="pa-0 ma-0 d-flex flex-column">
        <nuxt-link :to="'/profile/' + userId + ''">
          <div class="userProfileLinkFont pa-0 ma-0">{{ username }}</div>
        </nuxt-link>
        <div class="activityDetailsLabelFont pa-0">
          Replied:&nbsp;{{ datePosted }}
        </div>
      </v-row> -->
      <v-row>
        <v-col class="pa-0">
          <nuxt-link :to="'/profile/' + userId + ''">
            <div class="userProfileLinkFont pa-0 ma-0">
              {{ username }}
            </div>
          </nuxt-link>
          <div class="activityDetailsLabelFont pa-0">
            replied&nbsp; {{ datePosted }}
          </div>
        </v-col>
        <v-col class="pa-0 text-right" cols="1">
          <CommentMenu
            :postOwnerId="userId"
            @performMenuAction="delegateMenuAction($event)"
          />
        </v-col>
      </v-row>
      <v-divider class="mt-2 mb-4 mt-sm-3 mb-sm-6"></v-divider>
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
import { mapActions } from "vuex";

export default {
  components: {
    ReportViolationCard,
    CommentMenu
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
