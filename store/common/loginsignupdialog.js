export const state = () => ({
  dialogOpen: false,
  cardActive: "login"
});

export const actions = {};

export const mutations = {
  setDialogToOpen(state, cardActive) {
    state.dialogOpen = true;
    state.cardActive = cardActive;
  },
  setDialogToClosed(state) {
    state.dialogOpen = false;
  }
};

export const getters = {
  isDialogOpen: state => {
    return state.dialogOpen;
  },
  dialogMessage: (state, getters, rootState, rootGetters) => {
    var actionDetails =
      rootGetters["common/securedActionValidation/getActionDetails"];
    if (actionDetails != null) {
      var message =
        "To " +
        actionDetails.actionType +
        " a " +
        actionDetails.postType +
        ", please Log In or Join";
      return message;
    }
  }
};
