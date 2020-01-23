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
    ...mapState("user/account", ["userDetails"])
  },
  mounted() {
    this.$bus.$on("toggle-nav-drawer", this.toggleNavigationDrawerVisibility);

    this.isUserAuthenticatedAction(null).then(response => {
      this.userAuthenticated = true;
    });
  }
};
