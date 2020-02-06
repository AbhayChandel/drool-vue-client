<template>
  <div>
    <v-autocomplete
      v-model="productsTagged"
      multiple
      chips
      deletable-chips
      placeholder="Find product to review..."
      :items="products"
      prepend-inner-icon="mdi-at"
      :rules="[v => !!v || 'Tag at least one product']"
    ></v-autocomplete>
  </div>
</template>

<script>
export default {
  data: () => ({
    productsTagged: [],
    products: [
      {
        value: "1",
        text: "Maybelline New York Clossal Kajal"
      },
      {
        value: "2",
        text: "Lakme Eyeconic Kajal Twin Pack-Deep Black"
      },
      {
        value: "3",
        text: "Chambor Extreme Eyes Long Wear Kohl"
      },
      {
        value: "4",
        text: "Kay Beauty 24 Hour Kajal"
      },
      {
        value: "5",
        text: "Nykaa Glaoreyes Eye Pencil"
      },
      {
        value: "6",
        text: "Maybelline New York Clossal Kajal"
      },
      {
        value: "7",
        text: "Maybelline New York Color Sensational Creamy Matte Lipstick"
      },
      {
        value: "8",
        text: "Lakme Absolute Matte Revolution Lip Color"
      },
      {
        value: "9",
        text: "Lakme Lip Love Chapstick"
      },
      {
        value: "10",
        text: "Nykaa Lip Crush Macaron Lip Balm"
      }
    ]
  })
};
</script>
