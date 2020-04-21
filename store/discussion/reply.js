export const state = () => ({
  replyDetails: null
});

export const mutations = {
  setReplyDetails(state, replyDetails) {
    state.replyDetails = replyDetails;
  }
};

export const actions = {
  postReply(vuexContext, details) {
    return new Promise((resolve, reject) => {
      console.log(
        "discussionTopicId: " +
          details.discussionTopicId +
          ". reply: " +
          details.reply
      );
      this.$axios
        .$post("/discussion/reply/post", {
          discussionId: details.discussionId,
          reply: details.reply,
          user: {
            id: vuexContext.rootState.user.account.userDetails.userId,
            username: vuexContext.rootState.user.account.userDetails.username
          },
          id: details.id
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
  deleteReply(vuexContext, details) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$put("/discussion/reply/set", {
          status: false,
          replyId: details.id,
          discussionId: details.discussionId
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

export const getters = {};
