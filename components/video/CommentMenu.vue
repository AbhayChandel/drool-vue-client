<template>
  <v-menu offset-y left>
    <template v-slot:activator="{ on }">
      <v-icon v-on="on" color="brown lighten-4">mdi-dots-vertical</v-icon>
    </template>
    <v-list v-show="showOwnerList">
      <v-list-item class="pl-4 pr-12" @click.stop="editComment()">
        <v-list-item-action class="ma-0 mr-3">
          <v-icon>mdi-pencil</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Edit</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item class="pl-4 pr-12">
        <v-list-item-action class="ma-0 mr-3">
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Delete</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list v-show="!showOwnerList">
      <v-list-item class="pl-4 pr-12">
        <v-list-item-action class="ma-0 mr-3">
          <v-icon>mdi-flag</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Report</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    postOwnerId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState("user/account", ["userDetails"]),
    showOwnerList() {
      return (
        this.userDetails != null && this.userDetails.userId == this.postOwnerId
      );
    }
  },
  methods: {
    editComment() {
      this.$emit("performMenuAction", "editComment");
    }
  }
};
</script>
