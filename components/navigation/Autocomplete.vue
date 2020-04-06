<template>
  <v-autocomplete
    v-model="productSelected"
    dense
    type="text"
    full-width:false
    item-text="name"
    item-value="id"
    return-object
    no-filter
    :search-input.sync="searchString"
    loading="true"
    placeholder="Search here..."
    no-data-text="No products found"
    :items="products"
    prepend-inner-icon="mdi-magnify"
    append-icon
    menu-props="{closeOnClick:true, closeOnContentClick:true,openOnClick:false}"
    @change="goToProduct()"
  ></v-autocomplete>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    searchString: "",
    productSelected: {},
    products: [],
  }),
  methods: {
    ...mapActions({
      searchProductsAction: "common/productsearch/searchProducts",
    }),
    goToProduct() {
      console.log("Go to product: " + this.productSelected.name);
      this.$router.push({
        path: `/product/${this.productSelected.id}`,
      });
    },
  },
  watch: {
    searchString(newVal) {
      if (newVal !== null && newVal.length > 1) {
        this.searchProductsAction({
          searchString: newVal,
        })
          .then((data) => {
            this.products = data;
          })
          .catch((message) => {
            console.log("error in componenet: " + message);
            this.isEmailAvailable = false;
            this.error = message;
          });
      } else {
        this.products = [];
      }
    },
  },
};
</script>
