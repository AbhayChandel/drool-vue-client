import { mapActions } from "vuex";

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
    justifyContent: "space-between"
  }),
  methods: {
    ...mapActions({
      isUserAuthenticated: "user/account/isUserAuthenticated"
    }),
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
  mounted() {
    console.log("I am called before the appbar is mounted");
    this.isUserAuthenticated(null)
      .then(response => {})
      .catch(message => {
        console.log("error in componenet: " + message);
      });
  },
  computed: {}
};
