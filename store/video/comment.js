export const state = () => ({
  commentDetails: null
});

export const mutations = {
  setCommentDetails(state, commentDetails) {
    state.commentDetails = commentDetails;
  }
};

export const getters = {};

export const actions = {
  async postComment(vuexContext, details) {
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
      comment: details.comment,
      id: details.id
    });
    return response;
  },
  async deleteComment(vuexContext, details) {
    let response = await this.$axios.$put("/video/delete/comment", {
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
      comment: details.comment,
      id: details.id
    });
    return response;
  },
  async saveCommentLike(vuexContext, details) {
    console.log(
      "postId: " +
        details.commentId +
        ". userId: " +
        vuexContext.rootState.user.account.userDetails.userId +
        " " +
        vuexContext.rootState.user.account.userDetails.username +
        ". ToggleType: " +
        details.toggleType +
        ". postDetails: " +
        vuexContext.rootState.common.post.currentPost +
        ". UserDetails: "
    );
    let response = await this.$axios.$put(
      `/video/comment/likes/${details.toggleType}`,
      {
        id: details.commentId,
        comment: details.comment,
        likes: details.likes,
        postRefDto: {
          id: vuexContext.rootState.common.post.currentPost.postId,
          title: vuexContext.rootState.common.post.currentPost.postTitle,
          type: vuexContext.rootState.common.post.currentPost.postType,
          medium: vuexContext.rootState.common.post.currentPost.postMedium
        },
        userRefDto: {
          id: vuexContext.rootState.user.account.userDetails.userId,
          username: vuexContext.rootState.user.account.userDetails.username
        }
      }
    );
    return response;
  }
};
