import YoutubePlayer from "@/components/video/YoutubePlayer";
import CommentCard from "@/components/video/CommentCard";

export default {
  components: {
    YoutubePlayer,
    CommentCard
  },
  data() {
    return {
      showAsAccordian: true,
      showAsFlat: true,
      showFullDescFlag: false,
      description:
        "We have a new brand in town, that obviously means it is review time? Today, I will be swatching and reviewing all Kay Beauty products under the sun and to make decisions easier for you guys. I have swatched them on my bare skin as well as with makeup on after neutralizing my lip. We have a new brand in town, that obviously means it is review time? Today, I will be swatching and reviewing all Kay Beauty products under the sun and to make decisions easier for you guys. I have swatched them on my."
    };
  },
  computed: {
    showFullDesc() {
      return this.showFullDescFlag;
    }
  },
  methods: {
    enableCompleteDesc() {
      this.showFullDescFlag = true;
    },
    disableCompleteDesc() {
      this.showFullDescFlag = false;
    }
  }
};
