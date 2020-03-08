<template>
  <VideoSection :videoData="contributionsData.videoData" />
</template>

<script>
import VideoSection from "@/components/profile/VideoSection";
export default {
  components: {
    VideoSection
  },
  props: {
    contributionsData: {
      type: Object,
      required: true
    }
  }
};
</script>
