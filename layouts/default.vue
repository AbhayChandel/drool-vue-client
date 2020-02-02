<template>
  <div>
    <AlertSnackbar />
    <PostDialog />
    <LoginJoinDialog />
    <nuxt />
  </div>
</template>

<script>
import AlertSnackbar from "@/components/global/AlertSnackbar";
import PostDialog from "@/components/global/postdialog/PostDialog";
import LoginJoinDialog from "@/components/global/loginjoindialog/LoginJoinDialog";

export default {
  components: { AlertSnackbar, PostDialog, LoginJoinDialog }
};
</script>
<style></style>
