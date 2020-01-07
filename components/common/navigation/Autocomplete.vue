<template>
  <v-autocomplete
    outlined
    dense
    type="text"
    full-width:false
    loading="true"
    placeholder="Search product here..."
    no-data-text="No products found"
    :items="products"
    sm-prepend-inner-icon="mdi-magnify"
    append-icon
    menu-props="{closeOnClick:true, closeOnContentClick:true,openOnClick:false}"
  ></v-autocomplete>
</template>

<script>
export default {
  data: () => ({
    products: [
      "Lakme 9to5 lipcolor",
      "Lakme 9to5 Kajal",
      "Lakme 9to5 Nail Paint"
    ]
  }),
  methods: {},
  computed: {}
};
</script>
