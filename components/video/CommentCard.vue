<template>
  <div
    class="px-4 px-sm-5 px-md-8 ma-0"
    style="width: 100%;"
    @mouseenter="showMenu = true"
    @mouseleave="showMenu = false"
  >
    <v-row class="pa-0 ma-0">
      <v-col class="pa-0">
        <nuxt-link :to="'/profile/' + userId + ''">
          <div class="userProfileLinkFont pa-0 ma-0">
            {{ username }}
          </div>
        </nuxt-link>
        <div class="activityDetailsLabelFont pa-0">
          commented&nbsp; {{ datePosted }}
        </div>
      </v-col>
      <v-col class="pa-0 text-right" cols="1">
        <PostMenu
          :postOwnerId="userId"
          @performMenuAction="delegateMenuAction($event)"
        />
      </v-col>
    </v-row>
    <v-row justify="left" class="pa-0 ma-0 mt-2 mb-6 mb-md-6">
      <v-col
        id="vote-col"
        cols="1"
        md="1"
        class="pa-0 d-flex flex-column align-center"
        style="max-width:50px; min-width:40px;"
      >
        <v-icon size="20" @click="toggleLike" :color="getThumbColor"
          >mdi-thumb-up</v-icon
        >
        <span>{{ getLikes }}</span>
      </v-col>
      <v-col id="question-col" cols="10" md="11" class="pa-0">
        <v-row class="ma-0 replyFont">
          {{ comment }}
        </v-row>
      </v-col>
    </v-row>
    <v-divider class="mb-6 mb-md-6 ma-0"></v-divider>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import PostMenu from "@/components/common/PostMenu";

export default {
  components: {
    PostMenu
  },
  data() {
    return {
      thumbClicked: false,
      currentLikes: this.likes,
      thumbColor: "",
      showMenu: false
    };
  },
  computed: {
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
      saveVideoCommentLike: "video/comment/saveCommentLike"
    }),
    delegateMenuAction(action) {
      this.setCommentDetailsMutation({
        action: action,
        index: this.index,
        id: this.id,
        comment: this.comment,
        datePosted: this.datePosted,
        user: {
          userId: this.userId,
          username: this.username
        }
      });
    },
    ...mapMutations({
      setCommentDetailsMutation: "video/comment/setCommentDetails"
    }),
    toggleLike() {
      this.validateAction({
        actionType: "like",
        postType: "comment",
        postOwnerId: this.userId
      })
        .then(response => {
          console.log("thumbClicked: " + this.thumbClicked);
          this.thumbClicked = !this.thumbClicked;
          console.log("thumbClicked: " + this.thumbClicked);

          this.saveVideoCommentLike({
            commentId: this.id,
            comment: this.comment,
            likes: this.currentLikes,
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
    }
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
    comment: {
      type: String,
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
    userId: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
};
</script>
