<template>
  <v-list-item-group multiple>
    <v-list-item
      v-for="violation in violations"
      :key="violation.id"
      class="pa-0 ma-0"
    >
      <template v-slot:default="{ active }">
        <v-list-item-action>
          <v-checkbox v-model="active" color="red darken-1"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ violation.violation }}</v-list-item-title>
        </v-list-item-content>
      </template>
    </v-list-item>
  </v-list-item-group>
</template>
<script>
export default {
  props: {
    violations: {
      type: Array,
      required: true
    }
  }
};
</script>
