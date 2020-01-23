import { mapActions, mapState, mapMutations } from "vuex";

export default {
  data: () => ({
    showNavigationDrawer: false,
    userAuthenticated: false,
    username: ""
  }),
  methods: {
    ...mapActions({
      isUserAuthenticatedAction: "user/account/isUserAuthenticated",
      signOutAction: "user/account/signOut"
    }),
    ...mapMutations({
      setDialogToOpen: "common/loginsignupdialog/setDialogToOpen"
    }),
    toggleNavigationDrawerVisibility() {
      this.showNavigationDrawer = !this.showNavigationDrawer;
    },
    signOut() {
      this.toggleNavigationDrawerVisibility();
      this.signOutAction();
    }
  },
  computed: {
    isUserAuthenticated() {
      return this.userAuthenticated;
    },
    ...mapState("user/account", ["userDetails", "token"])
  },
  watch: {
    token: function(tokenValue) {
      if (tokenValue == null) {
        this.userAuthenticated = false;
      } else {
        this.userAuthenticated = true;
      }
    }
  },
  mounted() {
    console.log("menu drawer is mounted");
    this.$bus.$on("toggle-nav-drawer", this.toggleNavigationDrawerVisibility);
    this.isUserAuthenticatedAction(null);
  }
};
