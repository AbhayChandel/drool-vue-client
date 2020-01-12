export const state = () => ({
  dialogOpen: false
});

export const actions = {};

export const mutations = {
  setDialogToOpen(state) {
    state.dialogOpen = true;
  },
  setDialogToClosed(state) {
    state.dialogOpen = false;
  }
};

export const getters = {
  isDialogOpen: state => {
    return state.dialogOpen;
  }
};
