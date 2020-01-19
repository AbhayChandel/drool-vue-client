<template>
  <v-app>
    <AppBar />
    <MenuDrawer />
    <v-content>
      <Discussion :discussionPageData="discussionPageData" />
    </v-content>
  </v-app>
</template>

<script>
import Discussion from "@/components/discussion/Discussion";
import AppBar from "@/components/common/navigation/AppBar";
import MenuDrawer from "@/components/common/navigation/MenuDrawer";
export default {
  components: {
    AppBar,
    MenuDrawer,
    Discussion
  },
  async asyncData(context) {
    return context.$axios
      .$get(
        `http://localhost:8080/djs/v1/view/discussion/page/id/${context.route.params.id}`
      )
      .then(response => {
        return { discussionPageData: response };
      })
      .catch(e => {
        error({ statusCode: 404, message: "Discussion page not found" });
      });
  },
  data: () => ({
    discussionPageData: null
  })
};
</script>
