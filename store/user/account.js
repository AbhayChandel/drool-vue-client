import Cookies from "js-cookie";

export const state = () => ({
  token: null,
  userDetails: null
});

export const actions = {
  saveTokenToCookie(vuexContext, token) {
    const jwtPayload = parseJwt(token);
    if (jwtPayload) {
      const jwtExpirationDate = new Date(
        Date.now() + (jwtPayload.exp - jwtPayload.iat) * 1000
      );
      console.log("Jwt Expiration date: " + jwtExpirationDate);
      Cookies.set("jwt", token, {
        expires: jwtExpirationDate
      });
      Cookies.set("jwtExpirationDate", jwtExpirationDate, {
        expires: 365
      });
    }
  },
  saveUserDetailsToCookie(vuexContext, userDetails) {
    Cookies.set("userDetails", userDetails);
  },
  removeUserCookies(vuexContext) {
    Cookies.remove("jwt");
    Cookies.remove("jwtExpirationDate");
    Cookies.remove("userDetails");
  },
  isUserAuthenticated(vuexContext, data) {
    return new Promise((resolve, reject) => {
      if (vuexContext.rootGetters["user/account/isAuthTokenAvailable"]) {
        console.log("Auth token found in vuex");
        resolve();
      } else {
        console.log("Auth token not found in vuex");

        const authToken = Cookies.get("jwt");
        const authTokenExpiration = Cookies.get("jwtExpirationDate");
        if (
          authToken &&
          authTokenExpiration &&
          Date.parse(authTokenExpiration) > new Date().getTime()
        ) {
          console.log(
            "Auth token found in cookie and is valid till " +
              authTokenExpiration
          );
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
          /* vuexContext.dispatch("validateAction", actionDetails, {
          root: false
        }); */
          resolve();
        } else {
          console.log(
            "Auth token not found in cookie or expired. Token was valid till: " +
              authTokenExpiration
          );
          vuexContext.dispatch("removeUserCookies", {
            root: false
          });
          reject();
        }
      }
    });
  },
  signOut(vuexContext) {
    console.log("Signing out user");
    vuexContext.commit("setAuthToken", null);
    vuexContext.commit("setUserDetails", null);
    vuexContext.dispatch("removeUserCookies", {
      root: false
    });
  },
  authenticateUser(vuexContext, credentials) {
    return new Promise((resolve, reject) => {
      console.log(
        "Email: " + credentials.email + ". Password: " + credentials.password
      );
      this.$axios
        .$post("/accessall/user/account/authenticate", {
          email: credentials.email,
          password: credentials.password
        })
        .then(data => {
          console.log(data.token);
          vuexContext.commit("setAuthToken", data.authToken);
          vuexContext.commit("setUserDetails", data.userDetails);
          vuexContext.dispatch("saveTokenToCookie", data.authToken, {
            root: false
          });
          vuexContext.dispatch("saveUserDetailsToCookie", data.userDetails, {
            root: false
          });
          resolve();
        })
        .catch(error => {
          var errorMessage = "";
          if (error.response) {
            if (error.response.status == 401 || error.response.status == 500) {
              errorMessage = error.response.data;
            }
            console.log("Response data: " + error.response.data);
            console.log("Response status: " + error.response.status);
            console.log("Response headers: " + error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            errorMessage = "Something went wrong. Please try again.";
            console.log("Request: " + error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            errorMessage = "Something went wrong. Please try again.";
            console.log("Error message: ", error.message);
          }
          console.log("Error config: " + error.config);
          reject(errorMessage);
        });
    });
  },
  registerUser(vuexContext, userDetails) {
    return new Promise((resolve, reject) => {
      console.log(
        "Name: " +
          userDetails.name +
          ". Username: " +
          userDetails.username +
          ". " +
          "Email: " +
          userDetails.email +
          ". Password: " +
          userDetails.password
      );
      this.$axios
        .$post("/accessall/user/account/register", {
          username: userDetails.username,
          email: userDetails.email,
          password: userDetails.password
        })
        .then(data => {
          console.log(data.token);
          vuexContext.commit("setAuthToken", data.authToken);
          vuexContext.commit("setUserDetails", data.userDetails);
          vuexContext.dispatch("saveTokenToCookie", data.authToken, {
            root: false
          });
          vuexContext.dispatch("saveUserDetailsToCookie", data.userDetails, {
            root: false
          });
          resolve();
        })
        .catch(error => {
          var errorMessage = "";
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (error.response.status == 401 || error.response.status == 500) {
              errorMessage = error.response.data;
            }
            console.log("Response data: " + error.response.data);
            console.log("Response status: " + error.response.status);
            console.log("Response headers: " + error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            errorMessage = "Something went wrong. Try again.";
            console.log("Request: " + error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            errorMessage = "Something went wrong. Try again.";
            console.log("Error message: ", error.message);
          }
          console.log("Error config: " + error.config);
          reject(errorMessage);
        });
    });
  },
  checkEmailAvailable(vuexContext, email) {
    return new Promise((resolve, reject) => {
      //var email = Object.values(emailObj)[0];
      console.log("email: " + email);
      this.$axios
        .$get(`/accessall/user/account/find/email/${email}`)
        .then(response => {
          reject("Email " + email + " is already registered.");
        })
        .catch(error => {
          if (error.response.status == 404) {
            resolve(true);
          } else {
            var errorMessage = "";
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              if (
                error.response.status == 401 ||
                error.response.status == 500
              ) {
                errorMessage = error.response.data;
              }
              console.log("Response data: " + error.response.data);
              console.log("Response status: " + error.response.status);
              console.log("Response headers: " + error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              errorMessage = "Something went wrong. Try again.";
              console.log("Request: " + error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              errorMessage = "Something went wrong. Try again.";
              console.log("Error message: ", error.message);
            }
            console.log("Error config: " + error.config);
            reject(errorMessage);
          }
        });
    });
  }
};

export const mutations = {
  setAuthToken(state, token) {
    state.token = token;
  },
  setUserDetails(state, userDetails) {
    state.userDetails = userDetails;
  }
};

export const getters = {
  isAuthTokenAvailable: state => {
    return state.token != null;
  }
};

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
}
