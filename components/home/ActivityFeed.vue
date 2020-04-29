<template>
  <div>
    <div v-for="post in feed" :key="post.postId">
      <VideoFeedCard
        v-if="post.postMedium === 'video'"
        :data="post"
        class="mb-4"
      />
      <DiscussionFeedCard
        v-if="post.postMedium === 'text' && post.postType === 'discussion'"
        :data="post"
        class="mb-4"
      />
    </div>
    <v-card v-intersect="getFeed">...</v-card>
  </div>
</template>
<script>
import VideoFeedCard from "./VideoFeedCard";
import DiscussionFeedCard from "./DiscussionFeedCard";
export default {
  components: {
    VideoFeedCard,
    DiscussionFeedCard
  },
  data: () => ({
    page: -1,
    feed: []
  }),
  computed: {
    url() {
      return "/view/activity/feed/" + this.page;
    }
  },
  methods: {
    getFeed() {
      this.page = this.page + 1;
      this.$axios
        .get(this.url)
        .then(response => {
          if (response.data.length > 1) {
            response.data.forEach(post => this.feed.push(post));
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
