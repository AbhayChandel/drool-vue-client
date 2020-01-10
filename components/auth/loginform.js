import { mapActions } from "vuex";

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
    ...mapActions({ loginUser: "user/account/authenticateUser" }),
    logIn() {
      if (this.$refs.form.validate()) {
        this.loginUser({
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
