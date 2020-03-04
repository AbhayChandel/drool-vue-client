<template>
  <v-card width="100%">
    <v-row class="pa-0 ma-0 pl-1">
      <v-col class="pr-3 pl-2 pb-0"
        ><v-img
          class="white--text align-start"
          :src="'https://img.youtube.com/vi/' + sourceId + '/0.jpg'"
        >
        </v-img
      ></v-col>
      <v-col
        class="font-weight-medium pa-0 pt-3 pb-0 pr-2 pl-2 text-wrap"
        style="display:block"
      >
        {{ title }}
      </v-col>
    </v-row>
    <v-row class="pa-0 ma-0 pl-1 pr-3"
      ><v-col
        cols="4"
        class="py-3 px-2"
        style="min-width:120px; max-width:100px;"
      >
        {{ views }} <span class="grey--text text--darken-1">views</span> &nbsp;
      </v-col>
      <v-col cols="3" class="pa-0 pt-3" style="min-width:60px; max-width:90px;">
        {{ likes }} <span class="grey--text text--darken-1">likes</span></v-col
      >
      <v-col cols="3" class="pa-0 pt-1" style="min-width:70px; max-width:90px;"
        ><v-btn
          text
          class="grey--text text--darken-1 pa-0"
          @click="openPostDialog()"
        >
          <v-icon small center class="mr-1">mdi-pencil</v-icon>Edit</v-btn
        ></v-col
      >
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
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
    }
  }
};
</script>
