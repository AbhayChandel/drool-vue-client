export const state = () => ({
  dialogOpen: false,
  actionDetails: null
});

export const actions = {};

export const mutations = {
  setDialogToOpen(state, actionDetails) {
    state.dialogOpen = true;
    state.actionDetails = actionDetails;
  },
  setDialogToClosed(state) {
    state.dialogOpen = false;
    state.actionDetails = null;
  }
};

export const getters = {
  isDialogOpen: state => {
    return state.dialogOpen;
  },
  dialogMessage: state => {
    if (state.actionDetails != null) {
      var message =
        "To " +
        state.actionDetails.action +
        " a " +
        state.actionDetails.postType +
        ", please Log In or Join";
      return message;
    }
  }
};
