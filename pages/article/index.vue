<template>
  <div>
    <AppBar />
    <MenuDrawer />
    <v-content>
      <Article />
    </v-content>
  </div>
</template>

<script>
import Article from "@/components/article/Article";
import AppBar from "@/components/navigation/AppBar";
import MenuDrawer from "@/components/navigation/MenuDrawer";

export default {
  components: {
    AppBar,
    MenuDrawer,
    Article
  }
  /* watchQuery: ["vi", "updated"],
  async asyncData(context) {
    let response = await context.$axios.$get(
      `http://localhost:8080/djs/v1/view/article/find/id/${context.route.query.vi}`
    );
    let videoPageData = {};
    videoPageData = response;
    videoPageData.mode = context.route.query.mode;
    return { videoPageData: videoPageData };
  },
  data: () => ({
    videoPageData: null
  }) */
};
</script>
