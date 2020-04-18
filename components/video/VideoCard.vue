<template>
  <div>
    <v-row class="px-4 px-sm-5 px-md-8 py-1 py-md-2 ma-0">
      <v-col>
        <v-row class="subtitle-1 font-weight-medium" style="line-height:1.5"
          >{{ videoTitle }}
        </v-row>
        <v-row class="activityDetailsLabelFont"
          >by
          <span class="userProfileLinkFont ml-1"> {{ postOwnerUsername }}</span>
        </v-row>
      </v-col>
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
        <v-row class="pa-0 mb-2 px-3" v-if="showVideoEditButton"
          ><v-btn small block outlined @click="openPostDialog()">
            <v-icon small left>mdi-pencil</v-icon> Edit Video</v-btn
          ></v-row
        >
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
      setDialogToOpen: "common/postdialogstore/setDialogToOpen"
    }),
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
        postOwnerId: this.postOwnerId
      })
        .then(response => {
          console.log("thumbClicked: " + this.thumbClicked);
          this.thumbClicked = !this.thumbClicked;
          console.log("thumbClicked: " + this.thumbClicked);

          this.saveVideoLike({
            videoId: this.videoId,
            videoTitle: this.videoTitle,
            toggleType: this.thumbClicked ? "increment" : "decrement"
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
