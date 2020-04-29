<template>
  <v-app>
    <AlertSnackbar />
    <PostDialog />
    <LoginJoinDialog />
    <ViolationDialog />
    <nuxt style="background-color: #f1f3ef;" />
  </v-app>
</template>

<script>
import AlertSnackbar from "@/components/global/AlertSnackbar";
import PostDialog from "@/components/global/postdialog/PostDialog";
import LoginJoinDialog from "@/components/global/loginjoindialog/LoginJoinDialog";
import ViolationDialog from "@/components/global/violation/ViolationDialog";

export default {
  components: { AlertSnackbar, PostDialog, LoginJoinDialog, ViolationDialog }
};
</script>
<style></style>
