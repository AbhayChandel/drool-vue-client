export const state = () => ({});

export const actions = {
  postTopic(vuexContext, topic) {
    return new Promise((resolve, reject) => {
      console.log(
        "topic: " +
          topic +
          ". userId: " +
          vuexContext.rootState.user.account.userDetails.userId +
          ". "
      );
      this.$axios
        .$post("/discussion/post", {
          title: topic.topic,
          user: {
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
  saveTopicLike(vuexContext, details) {
    return new Promise((resolve, reject) => {
      console.log(
        "postId: " +
          details.postId +
          ". userId: " +
          vuexContext.rootState.user.account.userDetails.userId +
          ". " +
          details.toggleType
      );
      this.$axios
        .$put(`/discussion/likes/${details.toggleType}`, {
          id: details.postId,
          userId: vuexContext.rootState.user.account.userDetails.userId
        })
        .then(data => {
          console.log(data);
          resolve(true);
        })
        .catch(error => {
          reject(false);
        });
    });
  }
};

export const mutations = {};

export const getters = {};
