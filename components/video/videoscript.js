import YoutubePlayer from "@/components/video/YoutubePlayer";

export default {
  components: {
    YoutubePlayer
  },
  data() {
    return {
      showAsAccordian: true,
      showAsFlat: true,
      showFullDesc: false,
      description:
        "We have a new brand in town, that obviously means it is review time? Today, I will be swatching and reviewing all Kay Beauty products under the sun and to make decisions easier for you guys. I have swatched them on my bare skin as well as with makeup on after neutralizing my lip. We have a new brand in town, that obviously means it is review time? Today, I will be swatching and reviewing all Kay Beauty products under the sun and to make decisions easier for you guys. I have swatched them on my."
    };
  },
  computed: {},
  methods: {
    enableCompleteDesc() {
      this.showFullDesc = true;
    },
    disableCompleteDesc() {
      this.showFullDesc = false;
    }
  }
};
