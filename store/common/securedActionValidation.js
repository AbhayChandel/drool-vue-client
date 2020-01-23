import Cookies from "js-cookie";

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
        console.log("Auth token found in vuex");
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
      } else {
        console.log("Auth token not found in vuex");
        //To Do: Check if the token is available in the cookie

        const authToken = Cookies.get("jwt");
        const authTokenExpiration = Cookies.get("jwtExpirationDate");
        if (
          authToken &&
          authTokenExpiration &&
          Date.parse(authTokenExpiration) > new Date().getTime()
        ) {
          console.log("Auth token is valid till " + authTokenExpiration);
          vuexContext.commit("user/account/setAuthToken", authToken, {
            root: true
          });
          const userDetails = Cookies.get("userDetails");
          if (userDetails) {
            vuexContext.commit(
              "user/account/setUserDetails",
              JSON.parse(userDetails),
              {
                root: true
              }
            );
          }
          vuexContext.dispatch("validateAction", actionDetails, {
            root: false
          });
        } else {
          console.log(
            "Auth token not found in cookie or expired. Token was valid till: " +
              authTokenExpiration
          );
          Cookies.remove("jwt");
          Cookies.remove("jwtExpirationDate");
          Cookies.remove("userDetails");
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
