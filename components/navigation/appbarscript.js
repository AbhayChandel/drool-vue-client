import { mapActions, mapState, mapMutations } from "vuex";

import Autocomplete from "@/components/navigation/Autocomplete";
import UserMenu from "@/components/navigation/UserMenu";
import NewPostMenu from "@/components/navigation/NewPostMenu";

export default {
  components: {
    Autocomplete,
    NewPostMenu,
    UserMenu
  },
  data: () => ({
    showSearchIcon: true,
    showLogo: true,
    showSearchBox: false,
    showSearchBoxCloseIcon: false,
    justifyContent: "space-between",
    userAuthenticated: false,
    showLoginSignupBtn: false,
    showUserAvatar: false,
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
        this.showLoginSignupBtn = true;
        this.showUserAvatar = false;
      } else {
        this.showLoginSignupBtn = false;
        this.showUserAvatar = true;
      }
    }
  },
  created() {
    this.isUserAuthenticatedAction()
      .then(result => {
        this.showUserAvatar = true;
      })
      .catch(result => {
        this.showLoginSignupBtn = true;
      });
  }
};
