export const state = () => ({
  dialogOpen: false,
  postDetails: {},
  postingStatus: "",
  postingResult: "",
  returnedPostDetails: ""
});

export const actions = {};

export const mutations = {
  setDialogToOpen(state, postDetails) {
    state.dialogOpen = true;
    state.postDetails = postDetails;
  },
  setDialogToClosed(state) {
    state.dialogOpen = false;
    if (state.postDetails.type === "review") {
      this.commit("common/review/resetReviewStoreState");
    }
    state.postDetails = {};
    state.postingStatus = "";
    state.postingResult = "";
    state.returnedPostDetails = "";
  },
  setPostingStatusPosting(state) {
    state.postingStatus = "posting";
  },
  setPostingResultSuccess(state) {
    state.postingResult = "success";
  },
  setPostingResultFail(state) {
    state.postingResult = "fail";
  },
  setReturnedPostDetails(state, details) {
    state.returnedPostDetails = details;
  }
};

export const getters = {
  isDialogOpen: state => {
    console.log("state.dialogOPen: " + state.dialogOpen);
    return state.dialogOpen;
  },
  getPostDetails: state => {
    if (state.dialogOpen == true && state.postDetails == {}) {
      console.error("postDetails is empty when dialog is open");
    }
    return state.postDetails;
  },
  getPostingStatus: state => {
    return state.postingStatus;
  },
  getPostingResult: state => {
    return state.postingResult;
  }
};
