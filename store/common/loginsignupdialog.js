export const state = () => ({
  dialogOpen: false,
  actionDetails: null
});

export const actions = {};

export const mutations = {
  setDialogToOpen(state) {
    state.dialogOpen = true;
  },
  setDialogToClosed(state) {
    state.dialogOpen = false;
    state.actionDetails = null;
  },
  setActionDetails(state, actionDetails) {
    state.actionDetails = actionDetails;
  }
};

export const getters = {
  isDialogOpen: state => {
    return state.dialogOpen;
  },
  dialogMessage: (state, getters, rootState, rootGetters) => {
    if (state.actionDetails != null) {
      var message =
        "To " +
        state.actionDetails.actionType +
        " a " +
        state.actionDetails.postType +
        ", please Log In or Join";
      return message;
    }
  }
};
