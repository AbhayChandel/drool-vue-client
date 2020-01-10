<template>
  <v-card class="answer-card">
    <!-- <v-container fluid style class="py-1 pl-2 pr-4 pr-sm-6"> -->
    <v-container fluid style class="pt-1 pb-4 pl-3 pr-5 pr-sm-6">
      <v-row justify="end" class="paddingMarginZero reportMenuRowHeight">
        <v-menu
          bottom
          left
          position:fixed
          :close-on-content-click="false"
          :z-index="1"
        >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon size="32" color="#bdc3e8">mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-card class="pl-4 pr-2 py-2" max-width="275">
            <v-radio-group dense>
              <v-radio small label="Use of bad language."></v-radio>
              <v-divider></v-divider>
              <v-radio
                label="Disrespectful or taunting to a person/community/race."
              ></v-radio>
              <v-divider></v-divider>
              <v-radio label="Sexual or valgur content."></v-radio>
              <v-divider></v-divider>
              <v-radio label="Content piracy."></v-radio>
              <v-divider></v-divider>
              <v-radio label="Does not answer the question"></v-radio>
              <v-divider></v-divider>
              <v-radio label="Contains Spam/Advertisement."></v-radio>
            </v-radio-group>
            <v-btn color="error">Report</v-btn>
          </v-card>
        </v-menu>
        <v-icon
          size="32"
          color="#bdc3e8"
          @click="showReportViolationCard = !showReportViolationCard"
        ></v-icon>
      </v-row>
      <v-row justify="center" class="paddingMarginZero">
        <v-col
          id="vote-col"
          cols="2"
          md="1"
          class="pa-0 d-flex flex-column align-center"
        >
          <v-icon size="24">mdi-thumb-up</v-icon>
          <span>{{ likes }}</span>
        </v-col>
        <v-col id="question-col" cols="10" md="11" class="pa-0">
          <v-row class="pa-0 ma-0 d-flex flex-column">
            <div class="userProfileLinkFont pa-0 ma-0">{{ username }}</div>
            <div class="activityDetailsLabelFont pa-0">
              Replied:&nbsp;{{ datePosted }}
            </div>
            <!-- <span class="userProfileLinkFont">{{ username }}</span> &nbsp;&nbsp;
            <span class="linkSupportingWordFont">replied</span> -->
          </v-row>
          <v-row class="pt-3 ma-0 replyFont">{{ reply }}</v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script src="./replycard.js"></script>

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
