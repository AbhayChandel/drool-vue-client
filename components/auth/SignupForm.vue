<template>
  <v-container fill-height fluid="true">
    <v-row no-gutters style="height:100%;" class="pa-5">
      <v-col
        cols="5"
        md="4"
        id="banner-col"
        class="vertical-banner d-none d-sm-flex flex-column flex-start pl-5 pt-7"
      >
        <div class="title font-weight-medium col-2 text-align-center">drool</div>
        <img src="/join_girls.svg" style="width:80%;" class="align-self-stretch mb-12" />
        <div
          class="headline font-weight-bold col-2 text-align-center"
        >Discover the communities, products and lot more.</div>
      </v-col>
      <v-col cols="12" sm="7" md="8">
        <v-row style="height:100%;" justify="center">
          <v-col id="signup-col" class="d-flex flex-column justify-center px-sm-10">
            <div class="caption mb-4 text-right">
              Already a member?
              <span class="linkColor">
                <nuxt-link to="/login">Sign in</nuxt-link>
              </span>
            </div>
            <div>
              <h3>Join drool</h3>
              <v-banner
                class="error caption mt-2"
                dark
                :value="showErrorBanner"
                :max-height="60"
              >{{ error }}</v-banner>
              <v-form ref="form" @submit.prevent="join">
                <div class="signInFormContainer mt-4">
                  <div class="fieldLabel caption font-weight-bold">Choose a Username</div>
                  <v-text-field
                    v-model="username"
                    :rules="[rules.required, rules.minLength]"
                    hint="e.g priya21, fabgirl"
                    background-color="#f1effd"
                    outlined
                    dense
                    required
                    class="mt-1 body-2 textFieldStyle"
                  ></v-text-field>
                  <div class="fieldLabel caption font-weight-bold">Email Address</div>
                  <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.validEmail]"
                    background-color="#f1effd"
                    outlined
                    dense
                    required
                    class="mt-1 body-2 textFieldStyle"
                  ></v-text-field>
                  <div>
                    <div class="fieldLabel caption font-weight-bold" style="display:inline">Password</div>
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
                  >Join</v-btn>
                </div>
              </v-form>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    error: "",
    username: "",
    email: "",
    password: "",
    unhidePassword: false,
    rules: {
      required: value => !!value || "Required.",
      minLength: v => v.length >= 3 || "Need 3 or more characters",
      validEmail: v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    }
  }),

  methods: {
    join() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("signupUser", {
            username: this.username,
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
  background: #f2d78e;
  color: #8e6d1b;
}

h3 {
  color: #8e6d1b;
}

#signup-col {
  max-width: 336px;
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