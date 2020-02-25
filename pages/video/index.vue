<template>
  <div>
    <AppBar />
    <MenuDrawer />
    <v-content>
      <Video :videoPageData="videoPageData" />
    </v-content>
  </div>
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
  watchQuery: ["vi"],
  async asyncData(context) {
    let response = await context.$axios.$get(
    `http://localhost:8080/djs/v1/view/video/find/id/${context.route.query.vi}`
    );
    return { videoPageData: response };
  },
  data: () => ({
    videoPageData: null
  })
};
</script>
