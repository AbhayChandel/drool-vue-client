<template>
  <div>
    <h3>Login to drool</h3>
    <v-banner
      class="error caption mt-4"
      style="font-family: Recoleta;"
      dark
      :value="showErrorBanner"
      :max-height="60"
      >{{ error }}</v-banner
    >
    <v-form ref="form" @submit.prevent="logIn">
      <div class="signInFormContainer mt-5">
        <div class="fieldLabel caption font-weight-bold">
          Email Address
        </div>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          background-color="#f1effd"
          outlined
          dense
          required
          class="mt-1 body-2 textFieldStyle"
        ></v-text-field>
        <div>
          <div
            class="fieldLabel caption font-weight-bold"
            style="display:inline"
          >
            Password
          </div>
          <div class="float-right d-inline caption linkColor">
            Forgot Password?
          </div>
        </div>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          type="password"
          background-color="#f1effd"
          outlined
          dense
          class="mt-1 body-2 textFieldStyle"
        ></v-text-field>
        <v-btn
          max-width="125"
          height="34"
          color="#e75293"
          class="caption"
          dark
          type="submit"
          >Log In</v-btn
        >
      </div>
    </v-form>
  </div>
</template>

<script src="./loginformscript.js"></script>

<style scoped>
.signInFormContainer {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}

h3 {
  color: #8e6d1b;
}

.fieldLabel {
  display: inline;
}

.linkColor {
  color: #4390be;
}

.textFieldStyle {
  width: 100%;
}
</style>
