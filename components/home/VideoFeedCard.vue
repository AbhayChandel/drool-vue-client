<template>
  <v-card>
    <v-list two-line>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title style="font-size: 14px; font-weight: 500;">{{
            data.title
          }}</v-list-item-title>
          <v-list-item-subtitle
            >by
            <span class="userProfileLinkFont">{{
              data.userRefDto.username
            }}</span>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-icon>
          <v-chip small>
            {{ data.postType }}
          </v-chip>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
    <nuxt-link :to="'/video?vi=' + data.postId + ''">
      <v-img
        aspect-ratio="1.78"
        :src="'https://img.youtube.com/vi/' + data.sourceId + '/0.jpg'"
      >
      </v-img>
    </nuxt-link>
    <v-card-text>
      <v-icon color="grey lighten-1">mdi-heart</v-icon>
      <span
        class="grey--text text--darken-1 mt-1"
        style="font-size: 13px; vertical-align: middle; padding-left: 2px;"
      >
        {{ data.likes }} likes
      </span>
      <v-icon class="ml-4" color="grey lighten-1">mdi-comment-multiple</v-icon
      >&nbsp;
      <span
        class="grey--text text--darken-1 mt-1"
        style="font-size: 13px; vertical-align: middle;"
      >
        {{ data.comments }} comments
      </span>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.v-list-item__title {
  white-space: unset;
}
</style>
