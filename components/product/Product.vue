<template>
  <v-container fill-height fluid style="max-width:1366px;" class="pa-0">
    <v-row style="height:100%;" justify="center" class="pa-0 ma-0 px-4">
      <v-col id="main-content-col" cols="12" sm="8" md="9" class="pa-0">
        <div class="mt-4">Users Feed</div>
        <v-divider class="mb-4 mt-1"></v-divider>
        <UserFeedSection :aspects="productPageData.productData.aspects" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserFeedSection from "@/components/product/UserFeedSection";
export default {
  components: {
    UserFeedSection
  },
  props: {
    productPageData: {
      type: Object,
      required: true
    }
  }
};
</script>
