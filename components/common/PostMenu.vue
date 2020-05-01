<template>
  <v-menu offset-y left close-on-content-click>
    <template v-slot:activator="{ on }">
      <v-icon v-on="on" color="brown lighten-4">mdi-dots-vertical</v-icon>
    </template>
    <v-list v-show="showOwnerList">
      <v-list-item class="pl-4 pr-12" @click.stop="emitAction('edit')">
        <v-list-item-action class="ma-0 mr-3">
          <v-icon>mdi-pencil</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Edit</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item class="pl-4 pr-12" @click.stop="emitAction('delete')">
        <v-list-item-action class="ma-0 mr-3">
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Delete</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list v-show="!showOwnerList">
      <v-list-item class="pl-4 pr-12" @click.stop="emitAction('report')">
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
import { mapState, mapActions } from "vuex";
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
    ...mapActions({
      validateAction: "common/securedActionValidation/validateAction"
    }),
    emitAction(action) {
      this.validateAction({
        actionType: "report",
        postType: "reply",
        postOwnerId: this.userId
      })
        .then(response => {
          this.$emit("performMenuAction", action);
        })
        .catch(message => {
          console.log("error in componenet: " + message);
        });
    }
  }
};
</script>
