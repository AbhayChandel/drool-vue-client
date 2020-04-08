<template>
  <div>
    <AppBar />
    <MenuDrawer />
    <v-content>
      <Home />
    </v-content>
  </div>
</template>
<script>
import Home from "@/components/home/Home";
import AppBar from "@/components/navigation/AppBar";
import MenuDrawer from "@/components/navigation/MenuDrawer";
export default {
  components: {
    AppBar,
    MenuDrawer,
    Home,
  },
};
</script>
