<template>
  <v-container id="ratingsContainer" class="py-0 my-0">
    <PageTitle title="Preferences" />
    <v-row class="d-flex flex-row flex-wrap justify-start">
      <v-col
        v-for="aspect in aspects"
        :key="aspect.id"
        class="ma-0 pa-0 ma-2"
        style=" min-width:230px; max-height:213px"
      >
        <v-card style="width:100%; height:100%" class="aspectReviewCardStyle">
          <v-card-title class="pb-2">{{ aspect.title }}</v-card-title>
          <v-card-text class="d-flex flex-row flex-wrap justify-start">
            <v-checkbox
              v-for="option in aspect.options"
              :key="option"
              v-model="aspect.selected"
              :label="option"
              :color="checkboxColor"
              :value="option"
              hide-details
              multiple
              class="shrink ma-1 pa-0"
              style="min-width:110px;"
            ></v-checkbox>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapActions } from "vuex";

import PageTitle from "./PageTitle";
export default {
  components: {
    PageTitle
  },
  watch: {
    selectedProduct(newVal, oldVal) {
      if (newVal != null) {
        if (oldVal == null || oldVal.id != newVal.id) {
          console.log("Selected product is updated");
          this.productUpdated = true;
          this.product = newVal;
        }
      }
    },
    productTaggingInFocus(val) {
      if (!val && this.productUpdated) {
        console.log("GettingAspects for new product");
        this.getProductAspects();
        this.productUpdated = false;
      } else {
        console.log("skipping loading aspects");
      }
    }
  },
  methods: {
    ...mapActions({
      getProductAspectsAction: "common/review/getProductAspects"
    }),
    getProductAspects() {
      this.getProductAspectsAction(this.product.id)
        .then(data => {
          console.log("Product aspects: " + data);
          var aspectTemplateList = data.aspectTemplateDtoList;
          aspectTemplateList.forEach(this.addSelectedArray);
          this.aspects = aspectTemplateList;
        })
        .catch(message => {
          console.log("error in componenet: " + message);
          this.isEmailAvailable = false;
          this.error = message;
        });
    },
    addSelectedArray(value) {
      value.selected = [];
    }
  },
  computed: {
    ...mapState("common/review", ["selectedProduct"]),
    ...mapState("common/review", ["productTaggingInFocus"])
  },
  data() {
    return {
      productUpdated: false,
      product: {},
      checkboxColor: "",
      aspects: []
    };
  },
  mounted() {
    this.checkboxColor = this.$getRandomColor();
  }
};
</script>
