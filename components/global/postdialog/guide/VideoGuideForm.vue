<template>
  <v-form ref="form" @submit.prevent="post">
    <!-- <ProductTagging
      class="mb-5"
      @productTagggingChanged="productsTagged = $event"
    /> -->
    <ProductTagging />
    <VideoFetch class="mb-5 mt-5" @fetchedVideoId="sourceVideoId = $event" />
    <v-text-field
      v-model="title"
      light
      label="Video Title"
      placeholder="Add video title here..."
      outlined
      validate-on-blur
      :rules="[videoTitleRules.required, videoTitleRules.minLength]"
    ></v-text-field>
    <v-textarea
      v-model="description"
      light
      auto-grow
      outlined
      label="Vide Description"
      placeholder="Add video description here..."
    ></v-textarea>
    <v-btn type="submit" block outlined medium color="blue" class="mb-4">{{
      buttonText
    }}</v-btn>
  </v-form>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

import ProductTagging from "../ProductTagging";
import VideoFetch from "../VideoFetch";

export default {
  components: {
    ProductTagging,
    VideoFetch,
  },
  data: () => ({
    id: null,
    productsTagged: [],
    sourceVideoId: "",
    title: "",
    description: "",
    videoTitleRules: {
      required: (value) => !!value || "Required.",
      minLength: (v) => v.length >= 15 || "Need 15 or more characters",
    },
    buttonText: "Post Guide",
  }),
  computed: {
    ...mapGetters("common/postdialogstore", ["getPostDetails"]),
    ...mapGetters("common/review", ["getSelectedProduct"]),
  },
  watch: {
    getSelectedProduct(newVal, oldVal) {
      this.productsTagged = newVal;
    },
  },
  created() {
    if (this.getPostDetails.mode == "edit") {
      this.id = this.getPostDetails.postData.id;
      this.title = this.getPostDetails.postData.title;
      this.description = this.getPostDetails.postData.description;
      this.sourceVideoId = this.getPostDetails.postData.sourceVideoId;
      this.buttonText = "Save Changes";
    }
  },
  methods: {
    ...mapActions({
      postVideoAction: "video/video/postVideo",
      openCloseSnackbarAction: "common/alertsnackbar/openCloseSnackbar",
    }),
    ...mapMutations({
      setPostingStatusPosting: "common/postdialogstore/setPostingStatusPosting",
      setPostingResultSuccess: "common/postdialogstore/setPostingResultSuccess",
      setPostingResultFail: "common/postdialogstore/setPostingResultFail",
      setReturnedPostDetails: "common/postdialogstore/setReturnedPostDetails",
      setDialogToClosed: "common/postdialogstore/setDialogToClosed",
    }),
    post() {
      if (this.$refs.form.validate() && this.productsTagged.length > 0) {
        var taggedProductIds = [];
        for (var i = 0; i < this.productsTagged.length; i++) {
          taggedProductIds[i] = this.productsTagged[i].id;
        }

        this.setPostingStatusPosting();
        this.postVideoAction({
          type: "guide",
          id: this.id,
          products: this.productsTagged,
          sourceVideoId: this.sourceVideoId,
          title: this.title,
          description: this.description,
        })
          .then((data) => {
            this.setPostingResultSuccess();
            this.setReturnedPostDetails({
              postId: data.id,
            });
          })
          .catch((message) => {
            this.setPostingResultFail();
          });
      }
    },
  },
};
</script>
