export const state = () => ({});

export const actions = {
  validateAction(vuexContext, actionDetails) {
    return new Promise((resolve, reject) => {
      /* vuexContext.commit(
        "common/loginsignupdialog/setActionDetails",
        actionDetails,
        {
          root: true
        }
      ); */
      var actionType = actionDetails.actionType;
      var postType = actionDetails.postType;
      console.log("actionType: " + actionType + ". postType: " + postType);

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
          } else if (
            actionType == "edit" &&
            actionDetails.postOwnerId !=
              vuexContext.rootState.user.account.userDetails.userId
          ) {
            console.log("You can only " + actionType + " your own " + postType);
            vuexContext.dispatch(
              "common/alertsnackbar/openCloseSnackbar",
              "You can only " + actionType + " your own " + postType,
              { root: true }
            );
            reject();
          } else {
            console.log("You are allowed to " + actionType + " " + postType);
            resolve(true);
          }
        })
        .catch(error => {
          if (error == "unauthenticated") {
            console.log("User is not authenticated");
            vuexContext.commit(
              "common/loginsignupdialog/setDialogToOpen",
              null,
              {
                root: true
              }
            );
            vuexContext.commit(
              "common/loginsignupdialog/setActionDetails",
              actionDetails,
              {
                root: true
              }
            );
          } else {
            console.log("Error: " + error);
          }
          reject();
        });
    });
  }
};

export const mutations = {};

export const getters = {};
