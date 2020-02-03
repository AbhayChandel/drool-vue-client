<template>
  <v-form ref="form" @submit.prevent="post">
    <v-textarea
      v-model="topic"
      clearable
      light
      auto-grow
      outlined
      label="Discussion Topic"
      placeholder="Add your discussion topic here..."
      :rules="[rules.required, rules.minLength]"
    ></v-textarea>
    <v-btn type="submit" block outlined medium color="blue" class="mb-4"
      >Post Discussion Topic</v-btn
    >
  </v-form>
</template>

<script>
export default {
  components: {},
  data: () => ({
    topic: "",
    rules: {
      required: value => !!value || "Required.",
      minLength: v => v.length >= 10 || "Need 10 or more characters"
    }
  }),
  methods: {
    post() {
      if (this.$refs.form.validate()) {
        alert("Form validate");
        /* this.registerUser({
          username: this.username,
          email: this.email,
          password: this.password
        })
          .then(() => {
            this.error = "";
            this.setDialogToClosed();
            this.$router.replace($nuxt.$route.path);
          })
          .catch(message => {
            console.log("error in componenet: " + message);
            this.error = message;
          }); */
      }
    }
  }
};
</script>
