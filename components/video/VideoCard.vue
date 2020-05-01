<template>
  <div>
    <v-row class="px-4 px-sm-5 px-md-8 py-1 py-md-2 ma-0">
      <v-list class="py-0" two-line width="100%">
        <v-list-item class="pa-0">
          <v-list-item-content class="py-0">
            <v-list-item-title class="subtitle-1 font-weight-medium">
              {{ videoTitle }}
            </v-list-item-title>
            <v-list-item-subtitle class="activityDetailsLabelFont">
              Posted By:
              <nuxt-link :to="'/profile/' + postOwnerId + ''">
                <span class="userProfileLinkFont">
                  {{ postOwnerUsername }}
                </span>
              </nuxt-link>
            </v-list-item-subtitle>

            <v-divider v-if="showDeleteMsgSection" class="mt-6"></v-divider>
            <v-card v-if="showDeleteMsgSection" flat>
              <v-card-text class="pb-0 px-0"
                >This post will be permanently deleted.<br />
              </v-card-text>
              <v-card-actions class="px-0">
                <v-btn
                  text
                  color="red darken-1"
                  :loading="deleteBtnLoading"
                  :disabled="deleteBtnLoading"
                  @click="deleteVideo"
                  >Delete</v-btn
                >
                <v-btn text @click.stop="showDeleteMsgSection = false"
                  >Cancel</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-list-item-content>
          <v-list-item-icon>
            <PostMenu
              :postOwnerId="postOwnerId"
              @performMenuAction="delegateMenuAction($event)"
            />
          </v-list-item-icon>
        </v-list-item>
      </v-list>
      <!-- <v-col>
        <v-row class="subtitle-1 font-weight-medium" style="line-height:1.5"
          >{{ videoTitle }}
        </v-row>
        <v-row class="activityDetailsLabelFont"
          >by
          <nuxt-link :to="'/profile/' + postOwnerId + ''">
            <span class="userProfileLinkFont ml-1">
              {{ postOwnerUsername }}</span
            >
          </nuxt-link>
        </v-row>
      </v-col> -->
    </v-row>
    <v-row class="pa-0 ma-0"
      ><YoutubePlayer :key="sourceVideoId" :sourceVideoId="sourceVideoId"
    /></v-row>
    <v-row class="mt-6 px-4 px-sm-5 px-md-8 pa-0 ma-0">
      <v-col class="pa-0 pr-6" cols="8" sm="9" md="10">
        <span style="display:block" v-if="!showFullDesc"
          >{{ videoDescription.slice(0, 200) }}
        </span>
        <v-btn
          small
          left
          text
          v-if="!showFullDesc && enableVideoDescShowHide"
          @click="enableCompleteDesc"
          color="blue"
          style="justify-content:left"
          class="pa-0"
          >Show more</v-btn
        >
        <span v-if="showFullDesc">{{ videoDescription }}</span>
        <v-btn
          small
          left
          text
          v-if="showFullDesc && enableVideoDescShowHide"
          @click="disableCompleteDesc"
          color="blue"
          style="justify-content:left"
          class="pa-0"
          >Show less</v-btn
        >
      </v-col>
      <v-col class="pa-0" cols="4" sm="3" md="2">
        <!-- <v-row class="pa-0 mb-2 px-3" v-if="showVideoEditButton"
          ><v-btn small block outlined @click="openPostDialog()">
            <v-icon small left>mdi-pencil</v-icon> Edit Video</v-btn
          ></v-row
        > -->
        <v-row class="pa-0 mb-2"
          ><v-col cols="3" class="pa-0 " align="end"
            ><v-icon size="20" @click="toggleLike" :color="getThumbColor"
              >mdi-thumb-up</v-icon
            ></v-col
          ><v-col cols="9" class="pa-0 pl-3" align="start">
            {{ getLikes }} likes</v-col
          ></v-row
        >
        <v-row class="pa-0 mb-2"
          ><v-col cols="3" class="pa-0" align="end"
            ><v-icon size="20">mdi-calendar-month </v-icon></v-col
          ><v-col cols="9" class="pa-0 pl-3" align="start">{{
            datePosted
          }}</v-col></v-row
        >
        <v-row class="pa-0 mb-2"
          ><v-col cols="3" class="pa-0" align="end"
            ><v-icon size="20">mdi-eye </v-icon></v-col
          ><v-col cols="9" class="pa-0 pl-3" align="start">
            {{ views }} views</v-col
          ></v-row
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

import PostMenu from "@/components/common/PostMenu";
import YoutubePlayer from "@/components/video/YoutubePlayer";

export default {
  components: {
    YoutubePlayer,
    PostMenu
  },
  data() {
    return {
      showFullDescFlag: false,
      thumbClicked: false,
      currentLikes: this.likes,
      thumbColor: "",
      showDeleteMsgSection: false
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
    },
    enableVideoDescShowHide() {
      return this.videoDescription.length > 200;
    }
  },
  methods: {
    ...mapMutations({
      setDialogToOpen: "common/postdialogstore/setDialogToOpen",
      setPostDetails: "common/violation/setPostDetails",
      setMainPostDetails: "common/violation/setMainPostDetails",
      setUserDetails: "common/violation/setUserDetails",
      setViolationDialogToOpen: "common/violation/setDialogToOpen"
    }),
    ...mapActions({
      validateAction: "common/securedActionValidation/validateAction",
      saveVideoLike: "video/video/saveVideoLike",
      deleteVideoAction: "video/video/deleteVideo",
      snackbarAction: "common/alertsnackbar/openCloseSnackbar"
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
            toggleType: this.thumbClicked ? "increment" : "decrement",
            postType: this.postType
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
            medium: "video",
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
    },
    deleteVideo() {
      this.deleteVideoAction({
        id: this.videoId,
        type: this.postType
      })
        .then(data => {
          if (data) {
            this.$router.push({
              path: "/home"
            });
          } else {
            this.snackbarAction(
              "Something went wrong. Please try again in some time."
            );
          }
        })
        .catch(message => {
          this.snackbarAction(
            "Something went wrong. Please try again in some time."
          );
        });
    },
    delegateMenuAction(action) {
      if (action == "edit") {
        this.openPostDialog();
      } else if (action == "delete") {
        this.showDeleteMsgSection = true;
      } else if (action == "report") {
        this.setPostDetails({
          id: this.id,
          title: this.videoTitle,
          type: this.postType,
          medium: "video"
        });
        this.setMainPostDetails({
          id: null,
          title: null,
          type: null,
          medium: null
        });
        this.setUserDetails({
          id: this.postOwnerId,
          username: this.postOwnerUsername
        });
        this.setViolationDialogToOpen(this.postType);
      }
    }
  },
  created() {
    if (this.mode != null && this.mode == "edit") {
      console.log("alert mode is on");
      this.openPostDialog();
    }
  },
  props: {
    mode: {
      type: String,
      required: false
    },
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
</script>
