export const state = () => ({
  dialogOpen: false,
  postDetails: ""
});

export const actions = {};

export const mutations = {
  setDialogToOpen(state, postDetails) {
    state.dialogOpen = true;
    state.postDetails = postDetails;
  },
  setDialogToClosed(state) {
    state.dialogOpen = false;
    state.postDetails = "";
  }
  /* setPostDetails(state, postDetails) {
    state.postDetails = postDetails;
  } */
};

export const getters = {
  isDialogOpen: state => {
    return state.dialogOpen;
  },
  getPostDetails: state => {
    if (state.dialogOpen == true && state.postDetails == "") {
      console.error("postDetails is empty when dialog is open");
    }
    return state.postDetails;
  }
};
