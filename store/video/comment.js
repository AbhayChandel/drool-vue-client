export const state = () => ({});

export const actions = {
  async postComment(vuexContext, details) {
    //return new Promise((resolve, reject) => {
    console.log(
      "postRefDto - id: " +
        details.videoId +
        ". postRefDto - title: " +
        details.videoTitle +
        ". postRefDto - type: " +
        details.postType +
        ". userRefDto - id: " +
        vuexContext.rootState.user.account.userDetails.userId +
        ". userRefDto - username: " +
        vuexContext.rootState.user.account.userDetails.username +
        ". comment: " +
        details.comment +
        ". "
    );
    let response = await this.$axios.$put("/video/insert/comment", {
      postRefDto: {
        id: details.videoId,
        title: details.videoTitle,
        type: details.postType,
        medium: "video"
      },
      userRefDto: {
        id: vuexContext.rootState.user.account.userDetails.userId,
        username: vuexContext.rootState.user.account.userDetails.username
      },
      comment: details.comment
    });
    return response;
    /* .then(data => {
        console.log(data);
        resolve(data);
      })
      .catch(error => {
        reject();
      }); 
    resolve();*/ // remove this after actual to call to server
    //});
  },
  saveCommentLike(vuexContext, details) {
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
        //.$put(`discussion/reply/post/likes/${details.toggleType}`, {
        .$put(`/discussion/reply/likes/${details.toggleType}`, {
          postId: details.postId,
          currentUserId: vuexContext.rootState.user.account.userDetails.userId
        })
        .then(data => {
          console.log(data);
          resolve(true);
        })
        .catch(error => {
          reject(false);
        }); */
      resolve();
    });
  }
};

export const mutations = {};

export const getters = {};
