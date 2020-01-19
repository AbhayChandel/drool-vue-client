import { mapActions, mapMutations } from "vuex";

export default {
  data: () => ({
    error: "",
    username: "",
    email: "",
    password: "",
    unhidePassword: false,
    isUsernameAvailable: false,
    isEmailAvailable: false,
    rules: {
      required: value => !!value || "Required.",
      minLength: v => v.length >= 3 || "Need 3 or more characters",
      validEmail: v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    }
  }),

  methods: {
    ...mapActions({
      findUsername: "user/profile/checkUsernameAvailable"
    }),
    ...mapActions({ registerUser: "user/account/registerUser" }),
    ...mapActions({ findEmail: "user/account/checkEmailAvailable" }),
    ...mapMutations({
      setDialogToClosed: "common/loginsignupdialog/setDialogToClosed"
    }),
    join() {
      if (this.$refs.form.validate()) {
        this.registerUser({
          username: this.username,
          email: this.email,
          password: this.password
        })
          .then(() => {
            this.error = "";
            this.setDialogToClosed();
            this.$router.replace($nuxt.$route.path);
          })
          .catch(message => {
            console.log("error in componenet: " + message);
            this.error = message;
          });
      }
    },
    checkUsername() {
      if (this.username != null && this.username != "") {
        console.log("Username to check for availability: " + this.username);
        this.findUsername(this.username)
          .then(isAvailable => {
            console.log("Is username available: " + isAvailable);
            this.isUsernameAvailable = true;
          })
          .catch(message => {
            console.log("error in componenet: " + message);
            this.isUsernameAvailable = false;
            this.error = message;
          });
      }
    },

    checkEmail() {
      if (this.email != null && this.email != "") {
        console.log("Email to check for availability: " + this.email);
        this.findEmail(this.email)
          .then(isAvailable => {
            console.log("Is email available: " + isAvailable);
            this.isEmailAvailable = true;
          })
          .catch(message => {
            console.log("error in componenet: " + message);
            this.isEmailAvailable = false;
            this.error = message;
          });
      }
    },
    usernameFieldInFocus() {
      this.isUsernameAvailable = false;
    },
    emailFieldInFocus() {
      this.isEmailAvailable = false;
    }
  },
  computed: {
    showErrorBanner() {
      if (this.error != "") {
        return true;
      } else {
        return false;
      }
    },
    showUsernameAvailableIcon() {
      return this.isUsernameAvailable;
    },
    showEmailAvailableIcon() {
      return this.isEmailAvailable;
    }
  }
};
