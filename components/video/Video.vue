<template
  ><v-container fill-height fluid style="max-width:1366px;" class="pa-0">
    <v-row style="height:100%;" class="pa-0 ma-0">
      <v-col id="main-content-col" class="pa-0">
        <v-card>
          <v-row class="px-4 px-sm-5 px-md-8 py-1 py-md-2 ma-0">
            <v-col>
              <v-row
                class="subtitle-1 font-weight-medium"
                style="line-height:1.5"
                >Every Kay Beauty Product Reviewed and Swatched | Kay By Katrina
                Kaif | Shreya Jain
              </v-row>
              <v-row class="activityDetailsLabelFont"
                >by
                <span class="userProfileLinkFont ml-1"> Shakira</span>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="pa-0 ma-0"><YoutubePlayer /></v-row>
          <v-row class="mt-6 px-4 px-sm-5 px-md-8 pa-0 ma-0">
            <v-col class="pa-0 pr-6" cols="8" sm="9" md="10">
              <span style="display:block" v-if="!showFullDesc"
                >{{ description.slice(0, 200) }} ...</span
              >
              <v-btn
                small
                left
                text
                v-if="!showFullDesc"
                @click="enableCompleteDesc"
                color="blue"
                style="justify-content:left"
                class="pa-0"
                >Show more</v-btn
              >
              <span v-if="showFullDesc">{{ description }}</span>
              <v-btn
                small
                left
                text
                v-if="showFullDesc"
                @click="disableCompleteDesc"
                color="blue"
                style="justify-content:left"
                class="pa-0"
                >Show less</v-btn
              >
            </v-col>
            <v-col class="pa-0" cols="4" sm="3" md="2">
              <v-row class="pa-0 mb-2"
                ><v-col cols="3" class="pa-0 " align="end"
                  ><v-icon size="20" @click="toggleLike" :color="getThumbColor"
                    >mdi-thumb-up</v-icon
                  ></v-col
                ><v-col cols="9" class="pa-0 pl-3" align="start"
                  >123 likes</v-col
                ></v-row
              >
              <v-row class="pa-0 mb-2"
                ><v-col cols="3" class="pa-0" align="end"
                  ><v-icon size="20" @click="toggleLike" :color="getThumbColor"
                    >mdi-calendar-month
                  </v-icon></v-col
                ><v-col cols="9" class="pa-0 pl-3" align="start"
                  >09-10-2019</v-col
                ></v-row
              >
              <v-row class="pa-0 mb-2"
                ><v-col cols="3" class="pa-0" align="end"
                  ><v-icon size="20" @click="toggleLike" :color="getThumbColor"
                    >mdi-eye
                  </v-icon></v-col
                ><v-col cols="9" class="pa-0 pl-3" align="start"
                  >123 views</v-col
                ></v-row
              >
            </v-col>
          </v-row>
          <div
            class="px-4 px-sm-5 px-md-8 mt-6 mt-md-8 mt-lg-10 mb-1 font-weight-bold"
          >
            10 comments
          </div>
          <v-divider class="mx-3 mx-sm-5 mx-md-8 mb-4 mt-0"></v-divider>
          <v-row class="ma-0 pa-0 px-4 px-sm-5 px-md-8">
            <v-textarea
              v-model="reply"
              placeholder="Add a comment here..."
              auto-grow
              rows="1"
              clearable
            ></v-textarea>
          </v-row>
          <v-btn
            text
            outlined
            subtitle-1
            v-if="showButton"
            class="mb-8 mr-1"
            :loading="showLoading"
            ><v-icon size="20" color="#ee8f3b" class="mr-1"
              >mdi-message-draw</v-icon
            >post</v-btn
          >
          <v-btn text outlined subtitle-1 v-if="showButton" class="mb-8"
            >Cancel</v-btn
          >
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./videoscript.js"></script>

<style scoped>
.v-expansion-panel::before {
  box-shadow: none;
}
</style>
