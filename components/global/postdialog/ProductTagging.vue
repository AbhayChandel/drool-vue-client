<template>
  <div>
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
    ></v-combobox>
  </div>
</template>

<script>
export default {
  methods: {
    productTagggingChanged() {
      this.$emit("productTagggingChanged", this.productsTagged);
    }
  },
  data: () => ({
    rules: {
      required: value => !!value || "Required."
    },
    errorMessage: "",
    productsTagged: [],
    products: [
      {
        id: "1",
        name: "Maybelline New York Clossal Kajal"
      },
      {
        id: "2",
        name: "Lakme Eyeconic Kajal Twin Pack-Deep Black"
      },
      {
        id: "3",
        name: "Chambor Extreme Eyes Long Wear Kohl"
      },
      {
        id: "4",
        name: "Kay Beauty 24 Hour Kajal"
      },
      {
        id: "5",
        name: "Nykaa Glaoreyes Eye Pencil"
      },
      {
        id: "6",
        name: "Maybelline New York Clossal Kajal"
      },
      {
        id: "7",
        name: "Maybelline New York Color Sensational Creamy Matte Lipstick"
      },
      {
        id: "8",
        name: "Lakme Absolute Matte Revolution Lip Color"
      },
      {
        id: "9",
        name: "Lakme Lip Love Chapstick"
      },
      {
        id: "10",
        name: "Nykaa Lip Crush Macaron Lip Balm"
      }
    ]
  })
};
</script>
