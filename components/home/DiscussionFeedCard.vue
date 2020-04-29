<template>
  <v-card>
    <v-list two-line>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title style="font-size: 14px; font-weight: 500;">
            <nuxt-link :to="'/discussion/' + data.id + ''"
              >{{ data.title }}
            </nuxt-link></v-list-item-title
          >
          <v-list-item-subtitle
            >by
            <nuxt-link :to="'/profile/' + data.user.id + ''">
              <span class="userProfileLinkFont">{{ data.user.username }}</span>
            </nuxt-link>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-icon>
          <v-chip small>
            {{ data.postType }}
          </v-chip>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
    <v-card-text class="pt-0">
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
        {{ data.comments }} replies
      </span>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>
<style>
.v-list-item__title {
  white-space: unset;
}
</style>
