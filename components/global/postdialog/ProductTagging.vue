<template>
  <div id="productTaggingDiv">
    <v-combobox
      v-model="productsTagged"
      item-text="name"
      item-value="id"
      full-width
      hide-selected
      multiple
      chips
      small-chips
      deletable-chips
      placeholder="Find products to tag..."
      hint="Tip: You can select multiple products"
      persistent-hint
      :items="products"
      prepend-inner-icon="mdi-at"
      menu-props="{ closeOnClick: true, closeOnContentClick:true, height:'400', maxHeight:600 }"
      :rules="[rules.required]"
      @change="productTagggingChanged"
      class="px-0"
    ></v-combobox>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
    productTagggingChanged() {
      this.$emit("productTagggingChanged", this.productsTagged);
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
        id: "1",
        name: "Maybelline New York Clossal Kajal",
        type: "kajal"
      },
      {
        id: "2",
        name: "Lakme Eyeconic Kajal Twin Pack-Deep Black",
        type: "kajal"
      },
      {
        id: "3",
        name: "Chambor Extreme Eyes Long Wear Kohl",
        type: "kohl"
      },
      {
        id: "4",
        name: "Kay Beauty 24 Hour Kajal",
        type: "kajal"
      },
      {
        id: "5",
        name: "Nykaa Glaoreyes Eye Pencil",
        type: "kajal"
      },
      {
        id: "6",
        name: "Maybelline New York Clossal Kajal",
        type: "kajal"
      },
      {
        id: "7",
        name: "Maybelline New York Color Sensational Creamy Matte Lipstick",
        type: "lipstick"
      },
      {
        id: "8",
        name: "Lakme Absolute Matte Revolution Lip Color",
        type: "lipcolor"
      },
      {
        id: "9",
        name: "Lakme Lip Love Chapstick",
        type: "lip-chapstick"
      },
      {
        id: "10",
        name: "Nykaa Lip Crush Macaron Lip Balm",
        type: "lip-balm"
      }
    ]
  })
};
</script>
<style>
#productTaggingDiv .v-input__slot {
  padding: 0px;
}
</style>
