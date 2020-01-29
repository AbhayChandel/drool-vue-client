export default {
  props: {
    sourceVideoId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      videoUrl:
        "https://www.youtube.com/embed/" +
        this.sourceVideoId +
        "?autoplay=1&origin=http://example.com"
    };
  },
  computed: {
    getVideoUrl() {
      return this.videoUrl;
    }
  }
};
