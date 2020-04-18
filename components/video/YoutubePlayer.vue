<template>
  <div class="iframeContainer">
    <iframe
      allowfullscreen
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      :src="getVideoUrl"
      frameborder="0"
      modestbranding
    ></iframe>
  </div>
</template>

<script>
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
</script>

<style scoped>
.iframeContainer {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
}
.iframeContainer iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
