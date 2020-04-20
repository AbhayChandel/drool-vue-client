<template>
  <v-container fluid style class="pr-sm-6 pa-0 mt-2 mt-lg-3">
    <v-row justify="left" class="paddingMarginZero">
      <v-col
        id="vote-col"
        cols="2"
        md="1"
        class="pa-0 d-flex flex-column align-center"
        style="max-width: 60px; min-width: 40px;"
      >
        <v-icon size="24" @click="toggleLike" :color="getThumbColor"
          >mdi-thumb-up</v-icon
        >
        <span>{{ getLikes }}</span>
      </v-col>
      <v-col id="question-col" cols="10" md="11" class="pa-0">
        <v-row id="question-content-row" class="pt-0 ma-0 titleFont">{{
          topic
        }}</v-row>
        <v-row class="pt-0 ma-0">
          <div class="d-flex flex-row mt-1 mb-2">
            <div class="activityDetailsLabelFont mr-1">
              Posted By:
            </div>
            <nuxt-link :to="'/profile/' + userId + ''">
              <div class="userProfileLinkFont">
                {{ username }}
              </div>
            </nuxt-link>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  components: {},
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
      thumbColor: ""
    };
  },
  methods: {
    ...mapActions({
      saveTopicLike: "discussion/topic/saveTopicLike",
      validateAction: "common/securedActionValidation/validateAction"
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
  font-size: 1.1rem;
  font-weight: 500;
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
