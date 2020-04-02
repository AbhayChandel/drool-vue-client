<template>
  <div id="productTaggingDiv">
    <v-combobox
      v-model="productsTagged"
      item-text="name"
      item-value="id"
      full-width
      hide-selected
      chips
      small-chips
      deletable-chips
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
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters("common/postdialogstore", ["getPostDetails"])
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
      setProductTaggingInFocus: "common/review/setProductTaggingInFocus"
    }),
    productTagggingChanged() {
      this.setSelectedProduct(this.productsTagged);
    },
    productTaggingInFocus() {
      this.setProductTaggingInFocus(true);
    },
    productTaggingLostFocus() {
      this.setProductTaggingInFocus(false);
    }
  },
  data: () => ({
    rules: {
      required: value => !!value || "Tag at least one product."
    },
    errorMessage: "",
    productsTagged: "",
    products: [
      {
        id: "5e81d26414bff8516ffbf0e0",
        name: "Maybelline New York Clossal Kajal",
        type: "kajal",
        brand: {
          id: "5e78ec62bb5b406776e92fac",
          name: "Maybelline"
        }
      },
      {
        id: "2",
        name: "Lakme Eyeconic Kajal Twin Pack-Deep Black",
        type: "kajal",
        brand: {
          id: "5e78ec62bb5b406776e92fac",
          name: "Lakme"
        }
      },
      {
        id: "3",
        name: "Chambor Extreme Eyes Long Wear Kohl",
        type: "kohl",
        brand: {
          id: "5e78ec62bb5b406776e92fac",
          name: "Lakme"
        }
      },
      {
        id: "4",
        name: "Kay Beauty 24 Hour Kajal",
        type: "kajal",
        brand: {
          id: "5e78ec62bb5b406776e92fac",
          name: "Lakme"
        }
      },
      {
        id: "5",
        name: "Nykaa Glaoreyes Eye Pencil",
        type: "kajal",
        brand: {
          id: "5e78ec62bb5b406776e92fac",
          name: "Lakme"
        }
      },
      {
        id: "6",
        name: "Maybelline New York Clossal Kajal",
        type: "kajal",
        brand: {
          id: "5e78ec62bb5b406776e92fac",
          name: "Lakme"
        }
      },
      {
        id: "7",
        name: "Maybelline New York Color Sensational Creamy Matte Lipstick",
        type: "lipstick",
        brand: {
          id: "5e78ec62bb5b406776e92fac",
          name: "Lakme"
        }
      },
      {
        id: "8",
        name: "Lakme Absolute Matte Revolution Lip Color",
        type: "lipcolor",
        brand: {
          id: "5e78ec62bb5b406776e92fac",
          name: "Lakme"
        }
      },
      {
        id: "9",
        name: "Lakme Lip Love Chapstick",
        type: "lip-chapstick",
        brand: {
          id: "5e78ec62bb5b406776e92fac",
          name: "Lakme"
        }
      },
      {
        id: "10",
        name: "Nykaa Lip Crush Macaron Lip Balm",
        type: "lip-balm",
        brand: {
          id: "5e78ec62bb5b406776e92fac",
          name: "Lakme"
        }
      }
    ]
  })
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
