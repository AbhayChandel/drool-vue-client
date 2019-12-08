<template>
  <v-container fill-height>
    <v-row no-gutters style="height:100%;" class="pa-5">
      <v-col
        id="banner-col"
        class="vertical-banner d-none d-sm-flex flex-column flex-start pl-5 pt-7"
      >
        <div class="title font-weight-medium col-2 text-align-center">drool</div>
        <img src="/login_girl.svg" style="width:80%;" class="align-self-stretch mb-12" />
        <div
          class="headline font-weight-bold col-2 text-align-center"
        >Discover the communities, products and lot more.</div>
      </v-col>
      <v-col id="login-col" class="d-flex flex-column justify-center px-sm-10">
        <div class="caption mb-12 text-right">
          Not a member?
          <span class="linkColor">
            <nuxt-link to="/signup">Sign up now</nuxt-link>
          </span>
        </div>
        <div>
          <h3>Login to drool</h3>
          <v-banner
            class="error caption mt-4"
            dark
            :value="showErrorBanner"
            :max-height="60"
          >{{ error }}</v-banner>
          <v-form ref="form" @submit.prevent="signIn">
            <div class="signInFormContainer mt-3">
              <div class="fieldLabel caption font-weight-bold">Email Address</div>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                background-color="#f1effd"
                outlined
                dense
                required
                class="mt-3 body-2 textFieldStyle"
              ></v-text-field>
              <div>
                <div class="fieldLabel caption font-weight-bold" style="display:inline">Password</div>
                <div class="float-right d-inline caption linkColor">Forgot Password?</div>
              </div>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                type="password"
                background-color="#f1effd"
                outlined
                dense
                class="mt-3 body-2 textFieldStyle"
              ></v-text-field>
              <v-btn
                max-width="125"
                height="34"
                color="#e75293"
                class="caption"
                dark
                type="submit"
              >Sign In</v-btn>
            </div>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    error: "",
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [v => !!v || "Password is required"]
  }),
  methods: {
    signIn() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("authenticateUser", {
            email: this.email,
            password: this.password
          })
          .then(() => {
            this.error = "";
            this.$router.push("/home");
          })
          .catch(message => {
            console.log("error in componenet: " + message);
            this.error = message;
          });
      }
    }
  },
  computed: {
    showErrorBanner() {
      console.log("entered setErrorBannerVisibility method");
      if (this.error != "") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
.signInFormContainer {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}

.vertical-banner {
  background: #f1cdd7;
  color: #865c6c;
}

h3 {
  color: #865c6c;
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
.signInFormHeading {
  color: #652a42;
}

.signInForm {
  margin-top: 140px;
  display: inline-block;
}

.signInDiv {
  width: 100vw;
  height: 100vh;
  padding-top: 40px;
  padding-right: 40px;
  padding-left: 233px;
}
</style>
