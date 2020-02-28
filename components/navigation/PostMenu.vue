<template>
  <v-menu offset-y left>
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        color="red darken-1"
        v-on="on"
        small
        class="hidden-sm-and-up mt-3"
      >
        <v-icon>mdi-plus-box-multiple</v-icon>
      </v-btn>
      <v-btn outlined v-on="on" small class="hidden-xs-only mt-3 mr-3">
        <v-icon class="mr-1">mdi-plus-box-multiple</v-icon> New
      </v-btn>
    </template>

    <v-list>
      <v-list-item>
        <v-list-item-title @click.stop="openPostDialog('review')"
          >Post Review</v-list-item-title
        >
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title @click="openPostDialog('guide')"
          >Post Guide</v-list-item-title
        >
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title @click="openPostDialog('discussion')"
          >Post Discussion</v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setDialogToOpen: "common/postdialogstore/setDialogToOpen"
    }),
    ...mapActions({
      validateAction: "common/securedActionValidation/validateAction"
    }),
    openPostDialog(postType) {
      this.validateAction({
        actionType: "post",
        postType: postType
      })
        .then(response => {
          this.setDialogToOpen({
            type: postType,
            mode: "new"
          });
        })
        .catch(message => {
          console.log("error in componenet: " + message);
        });
    }
  }
};
</script>
