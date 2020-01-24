export const state = () => ({
  actionDetails: null
});

export const actions = {
  validateAction(vuexContext, actionDetails) {
    return new Promise((resolve, reject) => {
      vuexContext.commit("setActionDetails", actionDetails);
      var actionType = actionDetails.actionType;
      var postType = actionDetails.postType;
      console.log(
        "actionType: " +
          actionType +
          ". postType: " +
          postType +
          ". " +
          "postOwnerId: " +
          actionDetails.postOwnerId
      );

      vuexContext
        .dispatch("user/account/isUserAuthenticated", null, {
          root: true
        })
        .then(data => {
          console.log("User is authenticated");
          if (
            actionType == "like" &&
            actionDetails.postOwnerId ==
              vuexContext.rootState.user.account.userDetails.userId
          ) {
            console.log("You cannot " + actionType + " your own " + postType);
            vuexContext.dispatch(
              "common/alertsnackbar/openCloseSnackbar",
              "You cannot " + actionType + " your own " + postType,
              { root: true }
            );
            reject();
          } else {
            console.log("You are allowed to " + actionType + " " + postType);
            resolve();
          }
        })
        .catch(error => {
          console.log("User is not authenticated");
          vuexContext.commit(
            "common/loginsignupdialog/setDialogToOpen",
            {
              action: actionType,
              postType: postType
            },
            {
              root: true
            }
          );
          reject();
        });
    });
  }
};

export const mutations = {
  setActionDetails(state, actionDetails) {
    state.actionDetails = actionDetails;
  }
};

export const getters = {
  getActionDetails: state => {
    return state.actionDetails;
  }
};
