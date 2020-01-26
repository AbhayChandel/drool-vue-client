<template>
  <div class="px-4 px-sm-5 px-md-8 ma-0" style="width: 100%;">
    <v-row class="pa-0 ma-0 d-flex flex-column">
      <div class="userProfileLinkFont pa-0 ma-0">{{ username }}</div>
      <div class="activityDetailsLabelFont pa-0">
        commented:&nbsp; {{ datePosted }}
      </div>
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

<script src="./commentcardscript.js"></script>
