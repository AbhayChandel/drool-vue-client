<template>
  <v-snackbar v-model="snackbarOpen" :timeout="0" color="error" class="red">
    {{ snackbarMessage }}
    <v-btn color="red" text @click="closeSnackbar">
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapState("common/alertsnackbar", ["snackbarOpen", "snackbarMessage"])
  },
  methods: {
    ...mapMutations({
      closeSnackbar: "common/alertsnackbar/closeSnackbar"
    })
  }
};
</script>
