export const state = () => ({
  currentPost: null
});

export const actions = {
  savePost(vuexContext, currentPost) {
    vuexContext.commit("setCurrentPost", currentPost);
  }
};

export const getters = {
  getCurrentPost: state => {
    return state.currentPost;
  }
};

export const mutations = {
  setCurrentPost(state, post) {
    state.currentPost = post;
  }
};
