<template>
  <div>
    <AppBar />
    <MenuDrawer />
    <v-content>
      <Profile />
    </v-content>
  </div>
</template>

<script>
import Profile from "@/components/profile/Profile";
import AppBar from "@/components/navigation/AppBar";
import MenuDrawer from "@/components/navigation/MenuDrawer";
import BottomNav from "@/components/profile/BottomNav";
export default {
  components: {
    AppBar,
    MenuDrawer,
    Profile,
    BottomNav
  }
};
</script>

<style></style>
