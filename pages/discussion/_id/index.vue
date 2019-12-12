<template>
  <v-app>
    <AppBar />
    <MenuDrawer />
    <v-content>
      <Discussion />
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
  }
};
</script>
