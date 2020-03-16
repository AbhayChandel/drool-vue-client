<template>
  <div>
    <AppBar />
    <MenuDrawer />
    <v-content>
      <Product :productPageData="productPageData" />
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
  },
  async asyncData(context) {
    return context.$axios
      .$get(
        `http://localhost:8080/djs/v1/view/product/page/id/${context.route.params.id}`
      )
      .then(response => {
        console.log(response.id);
        
        return { productPageData: response };
      })
      .catch(e => {
        error({ statusCode: 404, message: "Product not found" });
      });
  },
  data: () => ({
    productPageData: null
  })
};
</script>
