<template>
  <v-card class="answer-card">
    <v-container fluid style class="py-1 pl-2 pr-4 pr-sm-6">
      <v-row justify="end" class="paddingMarginZero">
        <v-icon size="32">mdi-dots-horizontal</v-icon>
      </v-row>
      <v-row justify="center" class="paddingMarginZero">
        <v-col id="vote-col" cols="2" md="1" class="pa-0 d-flex flex-column align-center">
          <v-icon size="28">mdi-thumb-up</v-icon>
          <span>15</span>
        </v-col>
        <v-col id="question-col" cols="10" md="11" class="pa-0">
          <v-row
            class="pa-0 ma-0 headline-1"
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim excepturi et aliquid, cupiditate consequuntur impedit odio illum porro alias facilis sed doloribus incidunt quisquam suscipit molestias officiis optio sit, beatae ab dolorem, pariatur expedita consequatur. Esse explicabo, possimus architecto repellendus facere, neque quidem obcaecati accusamus itaque beatae omnis officia maiores ducimus. Facilis nobis molestias tempore quaerat illo ipsam ratione id.</v-row>
          <v-row class="pt-1 ma-0">
            <span class="linkSupportingWordFont">by</span> &nbsp;
            <span class="userProfileLinkFont">PriyaRao</span>
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