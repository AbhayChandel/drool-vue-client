export const state = () => ({});

export const actions = {
  postVideo(vuexContext, videoDetails) {
    return new Promise((resolve, reject) => {
      console.log(
        "type: " +
          videoDetails.type +
          " id: " +
          videoDetails.id +
          " Products tagged: " +
          videoDetails.products +
          " sourceVideoId: " +
          videoDetails.sourceVideoId +
          " Title: " +
          videoDetails.title +
          " Description: " +
          videoDetails.description +
          ". userId: " +
          vuexContext.rootState.user.account.userDetails
      );
      this.$axios
        .$post("/video/save", {
          active: true,
          id: videoDetails.id,
          type: videoDetails.type,
          title: videoDetails.title,
          description: videoDetails.description,
          sourceId: videoDetails.sourceVideoId,
          productRefDtoList: videoDetails.products,
          userRefDto: {
            id: vuexContext.rootState.user.account.userDetails.userId,
            username: vuexContext.rootState.user.account.userDetails.username
          }
        })
        .then(data => {
          console.log(data);
          resolve(data);
        })
        .catch(error => {
          reject();
          console.error("In topic store: " + error);
        });
    });
  },
  saveVideoLike(vuexContext, details) {
    return new Promise((resolve, reject) => {
      console.log(
        "videoId: " +
          details.videoId +
          " videoTitle: " +
          details.videoTitle +
          ". userId: " +
          vuexContext.rootState.user.account.userDetails.userId +
          ". " +
          details.toggleType
      );
      this.$axios
        .$put(`/video/likes/${details.toggleType}`, {
          userId: vuexContext.rootState.user.account.userDetails.userId,
          videoId: details.videoId,
          videoTitle: details.videoTitle
        })
        .then(data => {
          if (data != null && data.toString()) {
            resolve(data);
          } else {
            reject(false);
          }
        })
        .catch(error => {
          reject(false);
        });
    });
  }
};

export const mutations = {};

export const getters = {};
