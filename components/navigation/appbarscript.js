import { mapActions, mapState, mapMutations } from "vuex";

import Autocomplete from "@/components/navigation/Autocomplete";

export default {
  components: {
    Autocomplete
  },
  data: () => ({
    showSearchIcon: true,
    showLogo: true,
    showSearchBox: false,
    showSearchBoxCloseIcon: false,
    justifyContent: "space-between",
    userAuthenticated: false,
    username: ""
  }),
  methods: {
    ...mapActions({
      isUserAuthenticatedAction: "user/account/isUserAuthenticated",
      signOutAction: "user/account/signOut"
    }),
    ...mapMutations({
      setDialogToOpenMutation: "common/loginsignupdialog/setDialogToOpen"
    }),
    signOut() {
      this.signOutAction();
    },
    toggleNavigationDrawer() {
      this.$bus.$emit("toggle-nav-drawer");
    },
    toggleSearchBoxDisplay() {
      this.showSearchIcon = !this.showSearchIcon;
      this.showLogo = !this.showLogo;
      this.showSearchBox = !this.showSearchBox;
      this.showSearchBoxCloseIcon = !this.showSearchBoxCloseIcon;
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
  beforeMount() {
    this.isUserAuthenticatedAction(null);
  }
};
