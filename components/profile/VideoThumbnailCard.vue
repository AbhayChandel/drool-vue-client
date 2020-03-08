<template>
  <v-card class="px-2 pt-2 pb-3 my-2 mr-2" style="width:100%">
    <nuxt-link :to="'/video?vi=' + id + ''">
      <v-img
        aspect-ratio="1.78"
        :src="'https://img.youtube.com/vi/' + sourceId + '/0.jpg'"
      >
      </v-img>
    </nuxt-link>

    <v-row
      class="pa-0 ma-0 pt-2 font-weight-medium"
      style="max-height:56px; overflow: hidden;"
    >
      <nuxt-link :to="'/video?vi=' + id + ''"> {{ title }}</nuxt-link>
    </v-row>
    <v-row class="pa-0 ma-0 d-flex flex-row justify-space-between"
      ><v-col cols="4" class="pt-3 pa-0" style="min-width:40px;">
        {{ views }} <span class="grey--text text--darken-1">views</span> &nbsp;
      </v-col>
      <v-col cols="4" class="pa-0 pt-3" style="min-width:60px;">
        {{ likes }} <span class="grey--text text--darken-1">likes</span></v-col
      >
      <v-col cols="3" class="pa-0 pt-1" style="min-width:70px; max-width:90px;"
        ><v-btn
          v-if="showVideoEditButton"
          text
          class="grey--text text--darken-1 pa-0 ma-0"
          nuxt
          :to="'/video?vi=' + id + '&mode=edit'"
        >
          <v-icon small center class="mr-1">mdi-pencil</v-icon>Edit</v-btn
        ></v-col
      >
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("user/account", ["userDetails"]),
    showVideoEditButton() {
      return (
        this.userDetails != null &&
        this.userId != null &&
        this.userDetails.userId == this.userId
      );
    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    sourceId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    views: {
      type: String,
      required: true
    },
    likes: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    }
  }
};
</script>
