import Cookies from "js-cookie";

export const state = () => ({
  currentPost: null
});

export const actions = {
  savePost(vuexContext, currentPost) {
    vuexContext.commit("setCurrentPost", currentPost);
    /* vuexContext.dispatch("savePostToCookie", currentPost, {
      root: false
    }); */
  }
  /* savePostToCookie(vuexContext, currentPost) {
    if (currentPost) {
      Cookies.set("cp", currentPost);
    }
  },
  getCurrentPost(vuexContext) {
    return new Promise((resolve, reject) => {
      if (state.currentPost == null) {
        vuexContext.commit("setCurrentPost", Cookies.get("cp"));
      }
      resolve(state.currentPost);
    });
  } */
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
