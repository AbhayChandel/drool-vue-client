<template>
  <v-app>
    <AppBar />
    <MenuDrawer />
    <v-content>
      <Video :videoPageData="videoPageData" />
    </v-content>
  </v-app>
</template>

<script>
import Video from "@/components/video/Video";
import AppBar from "@/components/navigation/AppBar";
import MenuDrawer from "@/components/navigation/MenuDrawer";

export default {
  components: {
    AppBar,
    MenuDrawer,
    Video
  },
  async asyncData(context) {
    return context.$axios
      .$get(
        `http://localhost:8080/djs/v1/view/video/page/id/${context.route.query.vi}`
      )
      .then(response => {
        return {
          videoPageData: response
        };
      })
      .catch(e => {
        error({ statusCode: 404, message: "Discussion page not found" });
      });
  },
  data: () => ({
    videoPageData: null
  })
  /*data() {
    return {
      videoPageData: null
       videoPageData: {
        videoCard: {
          id: 1,
          title:
            "Every Kay Beauty Product Reviewed and Swatched | Kay By Katrina Kaif | Shreya Jain",
          likes: 75,
          datePosted: "09-11-2019",
          views: 11000,
          description:
            "We have a new brand in town, that obviously means it is review time? Today, I will be swatching and reviewing all Kay Beauty products under the sun and to make decisions easier for you guys. I have swatched them on my bare skin as well as with makeup on after neutralizing my lip. We have a new brand in town, that obviously means it is review time? Today, I will be swatching and reviewing all Kay Beauty products under the sun and to make decisions easier for you guys. I have swatched them on my.",
          postOwner: {
            id: 1002,
            username: "misspuja"
          }
        },
        commentCardList: [
          {
            id: 1,
            datePosted: "01-01-2020",
            comment:
              "This is my reply for the video. I don't have much to say.",
            likes: 2,
            userDetails: {
              id: 101,
              username: "First User"
            }
          },
          {
            id: 2,
            datePosted: "01-05-2020",
            comment:
              "This is second reply. which also happends to be a fake reply.",
            likes: 5,
            userDetails: {
              id: 102,
              username: "Second User"
            }
          },
          {
            id: 3,
            datePosted: "02-01-2020",
            comment:
              "This is also one of the fake reply. THis is also being used just to fill up the space.",
            likes: 10,
            userDetails: {
              id: 103,
              username: "Third User"
            }
          },
          {
            id: 4,
            datePosted: "15-01-2020",
            comment:
              "This is ideally the last fake reply we need. These many comments should be enouth. One mistake that I noticed is, I have used reply instead of comment in the comments. Hope this does not happen when the real data comes in",
            likes: 25,
            userDetails: {
              id: 104,
              username: "Fourth User"
            }
          }
        ]
      }
    };*/
};
</script>
