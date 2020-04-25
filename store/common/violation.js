export const state = () => ({
  vDialogOpen: false,
  formStatus: null,
  postType: null,
  postDetails: {},
  mainPostDetails: {},
  userDetails: {}
});

export const mutations = {
  setDialogToOpen(state, postType) {
    state.vDialogOpen = true;
    state.postType = postType;
    state.formStatus = "loading";
  },
  setDialogToClosed(state) {
    state.vDialogOpen = false;
    state.formStatus = null;
    state.postType = null;
    state.postDetails = {};
    state.mainPostDetails = {};
    state.userDetails = {};
  },
  setFormStatus(state, status) {
    state.formStatus = status;
  },
  setPostDetails(state, postDetails) {
    state.postDetails = postDetails;
  },
  setMainPostDetails(state, mainPostDetails) {
    state.mainPostDetails = mainPostDetails;
  },
  setUserDetails(state, userDetails) {
    state.userDetails = userDetails;
  }
};

export const getters = {};

export const actions = {
  async getTemplate(vuexContext, postType) {
    let response = await this.$axios.$get(`/violation/template/${postType}`);
    return response;
  },
  async reportViolation(vuexContext, details) {
    return await this.$axios.$post("/violation/report/save", {
      violations: details.violations,
      post: {
        id: vuexContext.state.postDetails.id,
        title: vuexContext.state.postDetails.title,
        type: vuexContext.state.postDetails.type,
        medium: vuexContext.state.postDetails.medium
      },
      mainPost: {
        id: vuexContext.state.mainPostDetails.id,
        title: vuexContext.state.mainPostDetails.title,
        type: vuexContext.state.mainPostDetails.type,
        medium: vuexContext.state.mainPostDetails.medium
      },
      postOwner: {
        id: vuexContext.state.userDetails.id,
        username: vuexContext.state.userDetails.username
      },
      reportedBy: {
        id: vuexContext.rootState.user.account.userDetails.userId,
        username: vuexContext.rootState.user.account.userDetails.username
      }
    });
  }
};
