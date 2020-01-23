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

    //console.log(this.$el.textContent); // I'm text inside the component.
  },
  computed: {}
};
