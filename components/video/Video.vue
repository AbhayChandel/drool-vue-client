<template
  ><v-container fill-height fluid style="max-width:1366px;" class="pa-0">
    <v-row style="height:100%;" class="pa-0 ma-0">
      <v-col id="main-content-col">
        <v-card>
          <v-row class="pa-0 px-3 ma-0">
            <v-col>
              <v-row class="subtitle-1"
                >Every Kay Beauty Product Reviewed and Swatched | Kay By Katrina
                Kaif | Shreya Jain
              </v-row>
              <v-row class="activityDetailsLabelFont"
                >by
                <span class="userProfileLinkFont ml-1"> Shakira</span>
              </v-row>
            </v-col>
          </v-row>
          <!-- <v-row class="pa-0 ma-0"><YoutubePlayer /></v-row> -->
          <v-row class="mt-6 px-3 pa-0 ma-0">
            <v-col class="pa-0 pr-6" cols="8" sm="10">
              <span v-if="!showFullDesc">{{ description.slice(0, 200) }}</span>
              <a v-if="!showFullDesc" href="#" @click="enableCompleteDesc"
                >Read more</a
              >
              <span v-if="showFullDesc">{{ description }}</span>
              <a v-if="showFullDesc" href="#" @click="disableCompleteDesc"
                >Read less</a
              >
            </v-col>
            <v-col class="pa-0" cols="4" sm="2">
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
