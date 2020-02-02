<template>
  <div style="width:100%">
    <v-textarea
      clearable
      light
      auto-grow
      hide-details="auto"
      class="mb-6"
      outlined
      label="Discussion Topic"
      placeholder="Add your discussion topic here..."
    ></v-textarea>
    <PostDiscussionButton class="mb-4" />
  </div>
</template>

<script>
import PostDiscussionButton from "./PostDiscussionButton";

export default {
  components: {
    PostDiscussionButton
  },
  data: () => ({})
};
</script>
