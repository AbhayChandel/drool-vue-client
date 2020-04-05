<template>
  <v-container id="ratingsContainer" class="py-0 my-0">
    <PageTitle title="Preferences" />
    <v-row class="d-flex flex-row flex-wrap justify-start">
      <v-col
        v-for="aspect in aspects"
        :key="aspect.id"
        class="ma-0 pa-0 ma-2"
        style="min-width: 230px; max-height: 213px;"
      >
        <v-card
          style="width: 100%; height: 100%;"
          class="aspectReviewCardStyle"
        >
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
              style="min-width: 110px;"
              @change="saveToStore()"
            ></v-checkbox>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";

import PageTitle from "./PageTitle";
export default {
  components: {
    PageTitle,
  },
  computed: {
    ...mapGetters("common/review", ["getSelectedProduct"]),
    ...mapGetters("common/review", ["getProductTaggingInFocus"]),
  },
  watch: {
    getSelectedProduct(newVal, oldVal) {
      if (newVal != null) {
        if (oldVal == null || oldVal.id != newVal.id) {
          console.log("Selected product is updated");
          this.productUpdated = true;
          this.product = newVal;
        }
      }
    },
    getProductTaggingInFocus(val) {
      if (!val && this.productUpdated) {
        console.log("Getting review forms for new product");
        this.getReviewForms();
        this.productUpdated = false;
      } else {
        console.log("skipping loading aspects");
      }
    },
  },
  methods: {
    ...mapActions({
      getReviewFormsAction: "common/review/getReviewForms",
    }),
    getReviewForms() {
      this.getReviewFormsAction({
        productId: this.product.id,
        brandId: this.product.brand.id,
      })
        .then((data) => {
          console.log("Product aspects: " + data);
          data.forEach(this.addSelectedArray);
          this.aspects = data;
        })
        .catch((message) => {
          console.log("error in componenet: " + message);
          this.isEmailAvailable = false;
          this.error = message;
        });
    },
    addSelectedArray(value) {
      value.selected = [];
    },
    ...mapMutations({
      setAspects: "common/review/setAspects",
    }),
    saveToStore() {
      this.setAspects(this.aspects);
    },
  },
  data() {
    return {
      productUpdated: false,
      product: {},
      checkboxColor: "",
      aspects: [],
    };
  },
  mounted() {
    this.checkboxColor = this.$getRandomColor();
  },
};
</script>
