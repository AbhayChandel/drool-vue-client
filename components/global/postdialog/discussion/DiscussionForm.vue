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
import { mapActions, mapMutations } from "vuex";

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
    ...mapActions({
      postTopicAction: "discussion/topic/postTopic",
      openCloseSnackbarAction: "common/alertsnackbar/openCloseSnackbar"
    }),
    ...mapMutations({
      setDialogToClosed: "common/postdialogstore/setDialogToClosed"
    }),
    post() {
      if (this.$refs.form.validate()) {
        this.postTopicAction({
          topic: this.topic
        })
          .then(data => {
            if (data) {
              this.$router.push({ path: `/discussion/${data.id}` });
            }
          })
          .catch(message => {
            this.openCloseSnackbarAction("Topic not posted. Try in some time.");
            console.error("error in post discussion form: " + message);
            this.error = message;
          });
        this.setDialogToClosed();
      }
    }
  }
};
</script>
