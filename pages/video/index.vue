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
  async asyncData(context) {
    return context.$axios
      .$get(
        `http://localhost:8080/djs/v1/view/video/page/id/${context.route.query.vi}`
      )
      .then(response => {
        return {
          videoPageData: response
        };
      })
      .catch(e => {
        error({ statusCode: 404, message: "Discussion page not found" });
      });
  },
  data: () => ({
    videoPageData: null
  })
};
</script>
