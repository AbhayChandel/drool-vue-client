export const state = () => ({});

export const actions = {
  postVideo(vuexContext, videoDetails) {
    return new Promise((resolve, reject) => {
      console.log(
        "Products tagged: " +
          videoDetails.products +
          " sourceVideoId: " +
          videoDetails.sourceVideoId +
          " Title: " +
          videoDetails.title +
          " Description: " +
          videoDetails.description
      );
      /* this.$axios
        .$post("/discussion/post", {
          topic: topic.topic,
          userId: vuexContext.rootState.user.account.userDetails.userId
        })
        .then(data => {
          console.log(data);
          resolve(data);
        })
        .catch(error => {
          reject();
          console.error("In topic store: " + error);
        }); */
    });
  },
  saveVideoLike(vuexContext, details) {
    return new Promise((resolve, reject) => {
      /* console.log(
               "postId: " +
                 details.postId +
                 ". userId: " +
                 vuexContext.rootState.user.account.userDetails.userId +
                 ". " +
                 details.toggleType
             );
             this.$axios
               .$put(`/discussion/likes/${details.toggleType}`, {
                 postId: details.postId,
                 currentUserId:
                   vuexContext.rootState.user.account.userDetails.userId
               })
               .then(data => {
                 console.log(data); 
                 resolve(true);
               })
               .catch(error => {
                 reject(false);
               });*/
      resolve(); //delete this once call to server is enabled
    });
  }
};

export const mutations = {};

export const getters = {};
