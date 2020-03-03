<template v-slot:extension>
  <v-tabs
    v-model="currentItem"
    fixed-tabs
    slider-color="black"
    class=""
    id="profileMenuBar"
  >
    <v-tab v-for="item in items" :key="item" :href="'#tab-' + item">
      {{ item }}
    </v-tab>

    <v-menu v-if="more.length" bottom left>
      <template v-slot:activator="{ on }">
        <v-btn text class="align-self-center mr-4" v-on="on">
          more
          <v-icon right>mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-list class="grey lighten-3">
        <v-list-item v-for="item in more" :key="item" @click="addItem(item)">
          {{ item }}
        </v-list-item>
      </v-list>
    </v-menu>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      currentItem: "tab-Web",
      items: ["Web", "Shopping", "Videos"],
      more: ["Images", "News", "Maps", "Books", "Flights", "Apps"]
    };
  },

  methods: {
    addItem(item) {
      const removed = this.items.splice(0, 1);
      this.items.push(...this.more.splice(this.more.indexOf(item), 1));
      this.more.push(...removed);
      this.$nextTick(() => {
        this.currentItem = "tab-" + item;
      });
    }
  }
};
</script>

<style>
#profileMenuBar .v-slide-group {
  display: block;
}
</style>
