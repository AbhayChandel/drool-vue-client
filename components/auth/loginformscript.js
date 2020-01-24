import { mapActions, mapMutations } from "vuex";

export default {
  components: {},
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
            this.setDialogToClosed();
            this.$router.push($nuxt.$route.path);
          })
          .catch(message => {
            console.log("error in componenet: " + message);
            this.error = message;
          });
      }
    },
    ...mapMutations({
      setDialogToClosed: "common/loginsignupdialog/setDialogToClosed"
    })
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
