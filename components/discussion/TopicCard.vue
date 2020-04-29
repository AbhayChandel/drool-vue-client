<template>
  <v-card class="px-3 pb-4 pt-4">
    <v-list class="py-0" three-line>
      <v-list-item class="pa-0">
        <v-list-item-avatar class="d-flex flex-column">
          <v-icon size="24" @click="toggleLike" :color="getThumbColor"
            >mdi-thumb-up</v-icon
          >
          <span>{{ getLikes }}</span>
        </v-list-item-avatar>
        <v-list-item-content class="py-0">
          <v-list-item-title class="questionTitleFont">
            <span v-if="!showTitleEditSection">
              {{ title }}
            </span>
            <div v-if="showTitleEditSection" class="mb-4">
              <v-textarea
                ref="titleField"
                v-model="updatedTitle"
                auto-grow
                rows="1"
                clearable
              ></v-textarea>
              <v-btn
                text
                outlined
                subtitle-1
                @click="updateTitle"
                :loading="saveBtnLoading"
                :disabled="saveBtnLoading"
                ><v-icon size="20" color="#ee8f3b" class="mr-1"
                  >mdi-content-save </v-icon
                >Save</v-btn
              >
              <v-btn
                text
                outlined
                subtitle-1
                @click="showTitleEditSection = false"
                >Cancel</v-btn
              >
            </div>
          </v-list-item-title>
          <v-list-item-subtitle class="activityDetailsLabelFont">
            Posted By:
            <nuxt-link :to="'/profile/' + userId + ''">
              <span class="userProfileLinkFont">
                {{ username }}
              </span>
            </nuxt-link>
          </v-list-item-subtitle>

          <v-divider v-if="showDeleteMsgSection" class="mt-6"></v-divider>
          <v-card v-if="showDeleteMsgSection" flat>
            <v-card-text class="pb-0 px-0"
              >This discussion will no more be linked with your account. Please
              remove any personal details if any mentioned before proceeding.<br />
            </v-card-text>
            <v-card-actions class="px-0">
              <v-btn
                text
                color="red darken-1"
                :loading="deleteBtnLoading"
                :disabled="deleteBtnLoading"
                @click="deleteDiscussion"
                >Delete</v-btn
              >
              <v-btn text @click.stop="showDeleteMsgSection = false">No</v-btn>
            </v-card-actions>
          </v-card>
        </v-list-item-content>
        <v-list-item-icon>
          <CommentMenu
            :postOwnerId="userId"
            @performMenuAction="delegateMenuAction($event)"
          />
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

import CommentMenu from "@/components/video/CommentMenu";

export default {
  components: { CommentMenu },
  props: {
    id: {
      type: String,
      required: true
    },
    topic: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    likes: {
      type: String,
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
      thumbColor: "",
      showTitleEditSection: false,
      showDeleteMsgSection: false,
      title: this.topic,
      updatedTitle: this.topic,
      saveBtnLoading: false,
      deleteBtnLoading: false
    };
  },
  methods: {
    ...mapActions({
      saveTopicLike: "discussion/topic/saveTopicLike",
      updateTopicTitle: "discussion/topic/updateTopicTitle",
      deleteDiscussionAction: "discussion/topic/deleteDiscussion",
      validateAction: "common/securedActionValidation/validateAction",
      snackbarAction: "common/alertsnackbar/openCloseSnackbar"
    }),
    ...mapMutations({
      setReplyDetailsMutation: "discussion/reply/setReplyDetails",
      setViolationDialogToOpen: "common/violation/setDialogToOpen",
      setPostDetails: "common/violation/setPostDetails",
      setMainPostDetails: "common/violation/setMainPostDetails",
      setUserDetails: "common/violation/setUserDetails"
    }),
    toggleLike() {
      this.validateAction({
        actionType: "like",
        postType: "topic",
        postOwnerId: this.userId
      })
        .then(response => {
          this.thumbClicked = !this.thumbClicked;

          this.saveTopicLike({
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
    },
    delegateMenuAction(action) {
      if (action == "edit") {
        this.showDeleteMsgSection = false;
        this.showTitleEditSection = true;
      } else if (action == "delete") {
        this.showTitleEditSection = false;
        this.showDeleteMsgSection = true;
      } else if (action == "report") {
        this.setPostDetails({
          id: this.id,
          title: this.topic,
          type: "discussion",
          medium: "text"
        });
        this.setMainPostDetails({
          id: null,
          title: null,
          type: null,
          medium: null
        });
        this.setUserDetails({
          id: this.userId,
          username: this.username
        });
        this.setViolationDialogToOpen("topic");
      }
    },
    updateTitle() {
      this.saveBtnLoading = true;
      this.updateTopicTitle({
        id: this.id,
        title: this.updatedTitle,
        datePosted: ""
      })
        .then(response => {
          if (response) {
            this.title = this.updatedTitle;
          }
          this.saveBtnLoading = false;
          this.showTitleEditSection = false;
        })
        .catch(message => {
          console.log("error in componenet: " + message);
          this.saveBtnLoading = false;
          this.showTitleEditSection = false;
        });
    },
    deleteDiscussion() {
      this.deleteBtnLoading = true;
      this.deleteDiscussionAction(this.id)
        .then(response => {
          if (response) {
            this.userId = response.user.id;
            this.username = response.user.username;
          }
          this.deleteBtnLoading = false;
          this.showDeleteMsgSection = false;
        })
        .catch(message => {
          console.log("error in componenet: " + message);
          this.deleteBtnLoading = false;
          this.showDeleteMsgSection = false;
          this.snackbarAction(
            "Not able to delete discussion at this time. Please try again in some time."
          );
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
.paddingMarginZero {
  padding: 0 0 0 0;
  margin: 0 0 0 0;
}

.questionTitleFont {
  font-size: 1rem;
  font-weight: 500;
}

#headingList {
  background-color: none;
}

#question-card {
  padding-bottom: 15px;
}

#question-content-row {
  line-height: 1.4rem;
}

.v-chip {
  font-size: 12px;
  padding: 4px 10px 4px 10px;
  margin-left: 8px;
  margin-bottom: 8px;
}
</style>
