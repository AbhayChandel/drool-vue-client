<template>
  <v-dialog v-model="show" max-width="600px" class="pa-0 ma-0">
    <JoiningCard
      v-if="showJoiningCard"
      @closeDialog="show = false"
      @toggleCardEvent="toggleCards"
    />
    <LoginCard
      v-if="showLoginCard"
      @closeDialog="show = false"
      @toggleCardEvent="toggleCards"
    />
  </v-dialog>
</template>

<script>
import LoginCard from "@/components/auth/LoginCard";
import JoiningCard from "@/components/auth/JoiningCard";

export default {
  components: {
    LoginCard,
    JoiningCard
  },
  data: () => ({
    loginCardActive: true,
    joiningCardActive: false
  }),
  props: {
    value: Boolean
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        //alert("about to emit input");
        this.$emit("input", value);
      }
    },
    showLoginCard() {
      return this.loginCardActive;
    },
    showJoiningCard() {
      return this.joiningCardActive;
    }
  },
  methods: {
    toggleCards() {
      this.loginCardActive = !this.loginCardActive;
      this.joiningCardActive = !this.joiningCardActive;
    }
  }
};
</script>
