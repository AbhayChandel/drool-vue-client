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
          id: details.id,
          post: {
            id: details.discussionId,
            title: details.discussionTitle
          },
          reply: details.reply,
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
        });
    });
  },
  deleteReply(vuexContext, details) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$delete(
          `/discussion/reply/delete/${details.discussionId}/${details.id}/${vuexContext.rootState.user.account.userDetails.userId}`,
          null
        )
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
      if (details.toggleType === "increment") {
        this.$axios
          .$put(`/discussion/reply/likes/${details.toggleType}`, {
            id: details.replyId,
            post: {
              id: details.discussionId,
              title: details.discussionTitle
            },
            reply: details.reply,
            likes: details.likes,
            user: {
              id: vuexContext.rootState.user.account.userDetails.userId,
              username: vuexContext.rootState.user.account.userDetails.username
            }
          })
          .then(data => {
            resolve(data);
          })
          .catch(error => {
            reject(false);
          });
      } else {
        this.$axios
          .$put(`/discussion/reply/likes/${details.toggleType}`, {
            replyId: details.replyId,
            likes: details.likes,
            discussionId: details.discussionId,
            userId: vuexContext.rootState.user.account.userDetails.userId
          })
          .then(data => {
            resolve(data);
          })
          .catch(error => {
            reject(false);
          });
      }
    });
  }
};

export const getters = {};
