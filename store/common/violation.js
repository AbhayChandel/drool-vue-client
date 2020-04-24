export const state = () => ({
  dialogOpen: false,
  formStatus: null,
  postDetails: null,
  postingStatus: "",
  postingResult: "",
  returnedPostDetails: ""
});

export const actions = {};

export const mutations = {
  setDialogToOpen(state, postDetails) {
    state.dialogOpen = true;
    state.postDetails = postDetails;
    state.formStatus = "loading";
  },
  setDialogToClosed(state) {
    state.dialogOpen = false;
    state.postDetails = {};
    state.postingStatus = "";
    state.postingResult = "";
    state.returnedPostDetails = "";
  },
  setFormStatus(state, status) {
    state.formStatus = status;
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
