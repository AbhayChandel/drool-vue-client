export const state = () => ({
  topicDetails: null
});

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
  updateTopicTitle(vuexContext, details) {
    return new Promise((resolve, reject) => {
      console.log(
        "topic: " +
          details.title +
          ". userId: " +
          vuexContext.rootState.user.account.userDetails.userId +
          ". "
      );
      this.$axios
        .$put("/discussion/update", {
          id: details.id,
          title: details.title,
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
  deleteDiscussion(vuexContext, id) {
    return new Promise((resolve, reject) => {
      console.log("Deleting discussion with Id: " + id);
      this.$axios
        .$put("/discussion/changeownership", {
          id: id,
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
          user: {
            id: vuexContext.rootState.user.account.userDetails.userId,
            username: vuexContext.rootState.user.account.userDetails.username
          }
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
