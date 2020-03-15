<template>
  <div>
    <AppBar />
    <MenuDrawer />
    <v-content>
      <Product />
    </v-content>
  </div>
</template>

<script>
import Product from "@/components/product/Product";
import AppBar from "@/components/navigation/AppBar";
import MenuDrawer from "@/components/navigation/MenuDrawer";
export default {
  components: {
    AppBar,
    MenuDrawer,
    Product
  }
};
</script>
