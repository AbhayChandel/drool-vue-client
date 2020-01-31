<template>
  <v-menu offset-y left>
    <template v-slot:activator="{ on }">
      <v-btn icon color="red darken-1" v-on="on" small>
        <v-icon>mdi-plus-box-multiple</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item>
        <v-list-item-title>Post Review</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Post Guide</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Post Discussion</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
