export const state = () => ({});

export const actions = {
  /* postReply(vuexContext, details) {
    return new Promise((resolve, reject) => {
      console.log(
        "discussionTopicId: " +
          details.discussionTopicId +
          ". reply: " +
          details.reply +
          ". " +
          "userId: " +
          details.userId
      );
      this.$axios
        .$post("/discussion/reply/post", {
          discussionTopicId: details.discussionTopicId,
          reply: details.reply,
          userId: details.userId
        })
        .then(data => {
          console.log(data);
          resolve(data);
        })
        .catch(error => {
          reject();
        });
    });
  }, */
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
          postId: details.postId,
          currentUserId: vuexContext.rootState.user.account.userDetails.userId
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
