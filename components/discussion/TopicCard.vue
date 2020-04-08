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
            <div class="userProfileLinkFont">{{ username }}</div>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./topiccardscript.js"></script>

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
