<template>
  <v-container id="videoSection" class="pa-0 pl-3">
    <v-row
      >Videos&nbsp;<span>({{ videoData.totalCount }})</span></v-row
    >
    <v-row class="d-flex flex-row flex-wrap justify-space-between">
      <v-col
        v-for="video in videoData.videos"
        :key="video.id"
        class="pa-0 d-flex align-strech"
        style="min-width:300px; max-width:325px;"
      >
        <VideoThumbnailCard
          :id="video.id"
          :sourceId="video.sourceId"
          :title="video.title"
          :views="video.views"
          :likes="video.likes"
        />
      </v-col>
      <v-col
        v-if="videoData.videos.length == 0"
        class="text-center grey--text text--lighten-1 font-weight-medium"
        >You have not contributed any videos</v-col
      >
    </v-row>
    <v-row>
      <v-btn
        v-if="showMoreVideoButton"
        text
        color="grey--text text--darken-1"
        class="pa-0"
        >Show More<v-icon size="20">mdi-menu-down</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>
<script>
import VideoThumbnailCard from "@/components/profile/VideoThumbnailCard";
export default {
  components: {
    VideoThumbnailCard
  },
  computed: {
    showMoreVideoButton() {
      return this.videoData.totalCount > 3;
    }
  },
  data: () => ({
    videoData: {
      totalCount: 5,
      videos: [
        {
          id: "1",
          sourceId: "fMcEJyWIwE4",
          title:
            "Deepika Padukone's Guide to Hair, Makeup, and Skincare | Little Black Book | Harper's BAZAAR",
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
          sourceId: "TmtQIs4WAB8",
          title:
            "Sonam Kapoor Gives a Lesson in ’90s Bollywood Beauty | Beauty Secrets | Vogue",
          views: "50",
          likes: "5"
        }
      ]
    }
  })
};
</script>

<style>
#videoSection .v-btn__content {
  text-transform: none !important;
}
</style>
