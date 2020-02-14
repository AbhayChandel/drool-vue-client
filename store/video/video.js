export const state = () => ({});

export const actions = {
  postVideo(vuexContext, videoDetails) {
    return new Promise((resolve, reject) => {
      console.log(
        "type: " +
          videoDetails.type +
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
        .$post("/video/insert", {
          active: true,
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
  }
};

export const mutations = {};

export const getters = {};
