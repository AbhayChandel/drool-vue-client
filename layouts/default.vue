<template>
  <div>
    <AlertSnackbar />
    <PostDialog />
    <LoginJoinDialog />
    <nuxt />
  </div>
</template>

<script>
import AlertSnackbar from "@/components/common/error/AlertSnackbar";
import PostDialog from "@/components/common/postdialog/PostDialog";
import LoginJoinDialog from "@/components/auth/LoginJoinDialog";

export default {
  components: { AlertSnackbar, PostDialog, LoginJoinDialog }
};
</script>
<style></style>
