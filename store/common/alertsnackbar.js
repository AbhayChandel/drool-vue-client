export const state = () => ({
  snackbarOpen: false,
  snackbarMessage: ""
});

export const mutations = {
  openSnackbar(state, message) {
    state.snackbarOpen = true;
    state.snackbarMessage = message;
  },
  closeSnackbar(state) {
    state.snackbarOpen = false;
    state.snackbarMessage = "";
  }
};

export const actions = {
  openCloseSnackbar(vuexContext, message) {
    return new Promise((resolve, reject) => {
      vuexContext.commit("openSnackbar", message);
      setTimeout(() => {
        vuexContext.commit("closeSnackbar");
        resolve();
      }, 6000);
    });
  }
};

export const getters = {};
