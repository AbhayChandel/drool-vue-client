<template>
  <v-app>
    <AppBar />
    <MenuDrawer />
    <v-content>
      <Video />
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
  }
};
</script>
