<template>
  <!-- <v-card id="question-card"> -->
  <!-- <v-container fluid style class="pt-1 pb-4 pl-1 pr-4 pr-sm-6"> -->
  <v-container fluid style class="pr-sm-6 pa-0 mt-2 mt-lg-3">
    <!-- <v-row justify="end" class="paddingMarginZero reportMenuRowHeight">
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
            <v-radio
              label="Content do not match title/description/tags."
            ></v-radio>
            <v-divider></v-divider>
            <v-radio label="Is not a question."></v-radio>
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
    </v-row> -->
    <v-row justify="left" class="paddingMarginZero">
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
        <v-row id="question-content-row" class="pt-0 ma-0 questionTitleFont">{{
          topic
        }}</v-row>
        <v-row class="pt-0 ma-0">
          <div class="d-flex flex-row mt-1 mb-2">
            <div class="activityDetailsLabelFont mr-1">
              Posted By:
            </div>
            <div class="userProfileLinkFont">Shabanastyle</div>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <!-- </v-card> -->
</template>

<script>
export default {
  components: {},
  props: {
    id: {
      type: Number,
      required: true
    },
    topic: {
      type: String,
      required: true
    },
    userId: {
      type: Number,
      required: true
    },
    likes: {
      type: Number,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  data: () => ({}),
  methods: {},
  computed: {}
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