<template>
  <div>
    <h3>Join drool</h3>
    <v-banner
      class="error caption mt-2"
      dark
      :value="showErrorBanner"
      :max-height="60"
      >{{ error }}</v-banner
    >
    <v-form ref="form" @submit.prevent="join">
      <div class="signInFormContainer mt-4">
        <div class="fieldLabel caption font-weight-bold">
          Choose a Username
        </div>
        <v-text-field
          @blur="checkUsername"
          @focus="usernameFieldInFocus"
          :append-icon="showUsernameAvailableIcon ? 'mdi-check' : undefined"
          v-model="username"
          :rules="[rules.required, rules.minLength]"
          hint="e.g priya21, fabgirl"
          background-color="#f1effd"
          outlined
          dense
          required
          class="mt-1 body-2 textFieldStyle"
        ></v-text-field>
        <div class="fieldLabel caption font-weight-bold">
          Email Address
        </div>
        <v-text-field
          @blur="checkEmail"
          @focus="emailFieldInFocus"
          :append-icon="showEmailAvailableIcon ? 'mdi-check' : undefined"
          v-model="email"
          :rules="[rules.required, rules.validEmail]"
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
        </div>
        <v-text-field
          v-model="password"
          :rules="[rules.required]"
          :type="unhidePassword ? 'text' : 'password'"
          @click:append="unhidePassword = !unhidePassword"
          :append-icon="unhidePassword ? 'mdi-eye' : 'mdi-eye-off'"
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
          >Join</v-btn
        >
      </div>
    </v-form>
  </div>
</template>

<script src="./joiningformscript.js"></script>

<style scoped>
.signInFormContainer {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}

h3 {
  color: #8e6d1b;
}

.v-input__icon--append .v-icon {
  color: green;
}

.fieldLabel {
  display: inline;
}

.textFieldStyle {
  width: 100%;
}
</style>
