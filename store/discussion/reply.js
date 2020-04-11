export const state = () => ({});

export const actions = {
  postReply(vuexContext, details) {
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
          discussionId: details.discussionId,
          reply: details.reply,
          user: details.user
        })
        .then(data => {
          console.log(data);
          resolve(data);
        })
        .catch(error => {
          reject();
        });
    });
  },
  toggleReplyLike(vuexContext, details) {
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
        .$put(`/discussion/reply/likes/${details.toggleType}`, {
          likes: "200",
          replyId: details.replyId,
          discussionId: details.discussionId,
          userId: vuexContext.rootState.user.account.userDetails.userId
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(false);
        });
    });
  }
};

export const mutations = {};

export const getters = {};
