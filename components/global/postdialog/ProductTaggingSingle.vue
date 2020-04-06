<template>
  <div id="productTaggingDiv">
    <v-combobox
      v-model="productsTagged"
      item-text="name"
      item-value="id"
      :search-input.sync="searchString"
      full-width
      hide-selected
      chips
      small-chips
      deletable-chips
      no-data-text="No products"
      no-filter
      placeholder="type product name..."
      hint=""
      persistent-hint
      :items="products"
      prepend-inner-icon="mdi-at"
      menu-props="{ closeOnClick: true, closeOnContentClick:true, height:'400', maxHeight:600 }"
      :rules="[rules.required]"
      @change="productTagggingChanged"
      @blur="productTaggingLostFocus"
      @focus="productTaggingInFocus()"
      class="px-0 mx-0"
    ></v-combobox>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("common/postdialogstore", ["getPostDetails"]),
  },
  mounted() {
    if (this.getPostDetails.mode == "edit") {
      this.productsTagged = this.getPostDetails.postData.productsTagged;
      this.productTagggingChanged();
    }
  },
  methods: {
    ...mapMutations({
      setSelectedProduct: "common/review/setSelectedProduct",
      setProductTaggingInFocus: "common/review/setProductTaggingInFocus",
    }),
    ...mapActions({
      searchProductsAction: "common/productsearch/searchProducts",
    }),
    productTagggingChanged() {
      this.setSelectedProduct(this.productsTagged);
    },
    productTaggingInFocus() {
      this.setProductTaggingInFocus(true);
    },
    productTaggingLostFocus() {
      this.setProductTaggingInFocus(false);
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
  data: () => ({
    rules: {
      required: (value) => !!value || "Tag at least one product.",
    },
    searchString: "",
    errorMessage: "",
    productsTagged: "",
    products: [],
  }),
};
</script>
<style>
#productTaggingDiv .v-input__slot {
  padding: 0px;
}

#productTaggingDiv .v-input__icon--append-outer .v-icon {
  color: #a5d6a7;
}

#productTaggingDiv .primary--text {
  color: #a5d6a7 !important;
}
</style>
