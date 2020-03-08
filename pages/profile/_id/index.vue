<template>
  <div>
    <AppBar />
    <MenuDrawer />
    <v-content>
      <Profile :profilePageData="profilePageData" />
    </v-content>
  </div>
</template>

<script>
import Profile from "@/components/profile/Profile";
import AppBar from "@/components/navigation/AppBar";
import MenuDrawer from "@/components/navigation/MenuDrawer";
export default {
  components: {
    AppBar,
    MenuDrawer,
    Profile
  },
  async asyncData(context) {
    let contributions = await context.$axios.$get(
      `http://localhost:8080/djs/v1/view/profile/contributions/id/${context.route.params.id}`
    );
    let data = {};
    data.contributions = contributions;
    return { profilePageData: data };
  },
  data: () => ({
    profilePageData: null
  })
};
</script>

<style></style>
