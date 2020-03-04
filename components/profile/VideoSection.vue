<template>
  <v-container id="videoSection">
    <v-row class="mb-2">Videos</v-row>
    <v-row>
      <v-col
        class="d-flex flex-row justify-space-between flex-wrap align-content-space-between pa-0"
      >
        <VideoThumbnailCard
          v-for="video in videos"
          :key="video.id"
          :sourceId="video.sourceId"
          :title="video.title"
          :views="video.views"
          :likes="video.likes"
          class="mb-1"
        />
        <v-btn block color="grey--text text--darken-1"
          >Show More<v-icon size="20" @click="toggleLike">mdi-menu-down</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import VideoThumbnailCard from "@/components/profile/VideoThumbnailCard";
export default {
  components: {
    VideoThumbnailCard
  },
  data: () => ({
    videos: [
      {
        id: "1",
        sourceId: "fMcEJyWIwE4",
        title:
          "Deepika Padukone's Guide to Hair, Makeup, and Skincare | Little Black Book | Harper's BAZAAR Deepika Padukone's Guide to Hair, Makeup, and Skincare | Little Black Book | Harper's BAZAAR",
        views: "5.6k",
        likes: "1.2k"
      },
      {
        id: "2",
        sourceId: "bMwG1R3sXnE",
        title:
          "Priyanka Chopra's Guide to Skincare | Little Black Book | Harper's BAZAAR",
        views: "6.8M",
        likes: "119k"
      },
      {
        id: "3",
        sourceId: "cGXuAlndfjM",
        title: "Deepika Padukone Gets Ready for the Met Gala | Vogue",
        views: "13.7M",
        likes: "194k"
      },
      {
        id: "4",
        sourceId: "TmtQIs4WAB8",
        title:
          "Sonam Kapoor Gives a Lesson in ’90s Bollywood Beauty | Beauty Secrets | Vogue",
        views: "50",
        likes: "5"
      }
    ]
  })
};
</script>

<style>
#videoSection .v-btn__content {
  text-transform: none !important;
}
</style>
