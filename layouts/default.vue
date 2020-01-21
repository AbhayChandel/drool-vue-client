<template>
  <div>
    <AlertSnackbar />
    <nuxt />
  </div>
</template>

<script>
import AlertSnackbar from "@/components/common/error/AlertSnackbar";
export default {
  components: { AlertSnackbar }
};
</script>
<style></style>
