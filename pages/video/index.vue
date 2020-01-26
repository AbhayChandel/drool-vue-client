<template>
  <v-app>
    <AppBar />
    <MenuDrawer />
    <v-content>
      <Video :videoPageData="videoPageData" />
    </v-content>
  </v-app>
</template>

<script>
import Video from "@/components/video/Video";
import AppBar from "@/components/navigation/AppBar";
import MenuDrawer from "@/components/navigation/MenuDrawer";

export default {
  components: {
    AppBar,
    MenuDrawer,
    Video
  },
  data() {
    return {
      videoPageData: {
        videoCard: {
          videoId: 1,
          videoTitle:
            "Every Kay Beauty Product Reviewed and Swatched | Kay By Katrina Kaif | Shreya Jain",
          likes: 75,
          datePosted: "09-11-2019",
          views: 11000,
          description:
            "We have a new brand in town, that obviously means it is review time? Today, I will be swatching and reviewing all Kay Beauty products under the sun and to make decisions easier for you guys. I have swatched them on my bare skin as well as with makeup on after neutralizing my lip. We have a new brand in town, that obviously means it is review time? Today, I will be swatching and reviewing all Kay Beauty products under the sun and to make decisions easier for you guys. I have swatched them on my.",
          postOwner: {
            id: 1002,
            username: "misspuja"
          }
        }
      }
    };
  }
};
</script>
