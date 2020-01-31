export const state = () => ({
  dialogOpen: false,
  postDetails: null
});

export const actions = {};

export const mutations = {
  setDialogToOpen(state) {
    state.dialogOpen = true;
  },
  setDialogToClosed(state) {
    state.dialogOpen = false;
    state.postDetails = null;
  },
  setPostDetails(state, postDetails) {
    state.postDetails = postDetails;
  }
};

export const getters = {
  isDialogOpen: state => {
    return state.dialogOpen;
  }
};
