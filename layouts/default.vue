<template>
  <div>
    <AlertSnackbar />
    <LoginJoinDialog />
    <nuxt />
  </div>
</template>

<script>
import AlertSnackbar from "@/components/common/error/AlertSnackbar";
import LoginJoinDialog from "@/components/auth/LoginJoinDialog";

export default {
  components: { AlertSnackbar, LoginJoinDialog }
};
</script>
<style></style>
