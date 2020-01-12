<template>
  <v-dialog
    v-model="dialogOpen"
    @input="setDialogToClosed"
    max-width="600px"
    class="pa-0 ma-0"
  >
    <JoiningCard v-if="showJoiningCard" @toggleCardEvent="toggleCards" />
    <LoginCard v-if="showLoginCard" @toggleCardEvent="toggleCards" />
  </v-dialog>
</template>

<script src="./loginjoindialogscript.js"></script>
