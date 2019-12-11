<template>
  <v-card id="question-card">
    <v-container fluid style class="py-1 pl-2 pr-4 pr-sm-6">
      <v-row justify="end" class="paddingMarginZero">
        <v-icon size="32">mdi-dots-horizontal</v-icon>
      </v-row>
      <v-row justify="center" class="paddingMarginZero">
        <v-col id="vote-col" cols="2" md="1" class="pa-0 d-flex flex-column align-center">
          <v-icon size="28">mdi-thumb-up</v-icon>
          <span>12</span>
        </v-col>
        <v-col id="question-col" cols="10" md="11" class="pa-0">
          <v-row
            id="question-content-row"
            class="pa-0 ma-0 subtitle-1 font-weight-medium"
          >Are Loreal lip colors better than Lakme or is it the other way around?</v-row>
          <v-row class="pt-1 ma-0">
            <span class="linkSupportingWordFont">by</span> &nbsp;
            <span class="userProfileLinkFont">Meena C.</span>
          </v-row>
          <v-row class="pt-4 ma-0">
            <v-col cols="2" sm="1" class="pa-0 ma-0 d-inline-block">Tags</v-col>
            <v-col cols="10" class="pa-0 ma-0 d-flex flex-wrap justify-start">
              <v-chip>loreal</v-chip>
              <v-chip>lipcolor</v-chip>
              <v-chip>lakme</v-chip>
              <v-chip>compare</v-chip>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>
.paddingMarginZero {
  padding: 0 0 0 0;
  margin: 0 0 0 0;
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