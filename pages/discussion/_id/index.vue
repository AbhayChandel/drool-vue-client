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
import axios from "axios";

import Discussion from "@/components/discussion/Discussion";
import AppBar from "@/components/common/navigation/AppBar";
import MenuDrawer from "@/components/common/navigation/MenuDrawer";
export default {
  components: {
    AppBar,
    MenuDrawer,
    Discussion
  },
  asyncData({ params, error }) {
    console.log(params);
    return axios
      .get(`http://localhost:8080/djs/v1/discussion/view/page/id/${params.id}`)
      .then(res => {
        return { discussionPageData: res.data };
      })
      .catch(e => {
        error({ statusCode: 404, message: "Discussion page not found" });
      });
  },
  data: () => ({
    discussionPageData: []
  })
};
</script>
