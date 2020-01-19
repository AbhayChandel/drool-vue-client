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

      if (vuexContext.rootGetters["user/account/isUserAuthenticated"]) {
        console.log("User is authenticated");
        if (
          actionType == "like" &&
          actionDetails.postOwnerId ==
            vuexContext.rootState.user.account.userDetails.userId
        ) {
          console.log("You cannot " + actionType + " your own " + postType);
          //TO Do: This should be shown with a snackbar.
          reject();
        } else {
          console.log("You are allowed to " + actionType + " " + postType);
          resolve();
        }
      } else {
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
      }
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
