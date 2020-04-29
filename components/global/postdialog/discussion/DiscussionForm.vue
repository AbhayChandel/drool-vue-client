<template>
  <v-form ref="form" @submit.prevent="post">
    <v-textarea
      v-model="topic"
      clearable
      light
      auto-grow
      outlined
      label="Discussion Topic"
      placeholder="Write your Question/Thought here..."
      :rules="[rules.required, rules.minLength]"
      validate-on-blur
    ></v-textarea>
    <v-btn type="submit" block outlined medium color="blue" class="mb-4"
      >Post Discussion</v-btn
    >
  </v-form>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

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
      setPostingStatusPosting: "common/postdialogstore/setPostingStatusPosting",
      setPostingResultSuccess: "common/postdialogstore/setPostingResultSuccess",
      setPostingResultFail: "common/postdialogstore/setPostingResultFail",
      setReturnedPostDetails: "common/postdialogstore/setReturnedPostDetails",
      setDialogToClosed: "common/postdialogstore/setDialogToClosed"
    }),
    post() {
      if (this.$refs.form.validate()) {
        this.setPostingStatusPosting();
        this.postTopicAction({
          topic: this.topic
        })
          .then(data => {
            this.setPostingResultSuccess();
            this.setReturnedPostDetails({
              postId: data.id
            });
          })
          .catch(message => {
            this.setPostingResultFail();
          });
      }
    }
  }
};
</script>
