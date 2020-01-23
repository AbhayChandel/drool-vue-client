import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    showNavigationDrawer: false,
    userAuthenticated: false,
    username: ""
  }),
  methods: {
    ...mapActions({
      isUserAuthenticatedAction: "user/account/isUserAuthenticated"
    }),
    toggleNavigationDrawerVisibility() {
      this.showNavigationDrawer = !this.showNavigationDrawer;
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
