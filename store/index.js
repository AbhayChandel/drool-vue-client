import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null
    },
    actions: {
      authenticateUser(vuexContext, credentials) {
        return new Promise((resolve, reject) => {
          console.log(
            "Email: " +
              credentials.email +
              ". Password: " +
              credentials.password
          );
          this.$axios
            .$post("/user/account/authenticate", {
              email: credentials.email,
              password: credentials.password
            })
            .then(data => {
              console.log(data.token);
              vuexContext.commit("setAuthToken", data.token);
              resolve();
            })
            .catch(error => {
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
      signupUser(vuexContext, userDetails) {
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
            .$post("/user/account/register", {
              username: userDetails.username,
              email: userDetails.email,
              password: userDetails.password
            })
            .then(data => {
              console.log(data.token);
              vuexContext.commit("setAuthToken", data.token);
              resolve();
            })
            .catch(error => {
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
            });
        });
      },
      checkUsernameAvailable(vuexContext, usernameObj) {
        return new Promise((resolve, reject) => {
          var username = Object.values(usernameObj)[0];
          console.log("username: " + username);
          this.$axios
            .$get(`/user/profile/find/username/${username}`)
            .then(response => {
              console.log("UserProfile ID: " + response.id);
              var isUsernameAvailable = response.id == 0 ? true : false;
              if (isUsernameAvailable) {
                resolve(isUsernameAvailable);
              } else {
                reject(
                  username +
                    " username is not available. Try a different username."
                );
              }
            })
            .catch(error => {
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
            });
        });
      },
      checkEmailAvailable(vuexContext, emailObj) {
        return new Promise((resolve, reject) => {
          var email = Object.values(emailObj)[0];
          console.log("email: " + email);
          this.$axios
            .$get(`/user/account/find/email/${email}`)
            .then(response => {
              console.log("Email Id response: " + response.id);
              var isEmailAvailable = response.id == 0 ? true : false;
              if (isEmailAvailable) {
                resolve(isEmailAvailable);
              } else {
                reject("Email " + email + " is already registered.");
              }
            })
            .catch(error => {
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
            });
        });
      }
    },

    mutations: {
      setAuthToken(state, token) {
        state.token = token;
      }
    },
    getters: {}
  });
};

export default createStore;
