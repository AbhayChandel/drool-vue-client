export const state = () => ({
  showEmojiPicker: false,
  inputFieldRef: null,
  inputVal: ""
});

export const mutations = {
  setShowEmojiPicker(state, details) {
    state.showEmojiPicker = details.show;
    state.inputFieldRef = details.inputFieldRef;
    state.inputVal = details.inputVal;
  },
  setHideEmojiPicker(state) {
    state.showEmojiPicker = false;
    state.inputFieldRef = null;
    state.inputVal = "";
  },
  setInputVal(state, inputVal) {
    state.inputVal = inputVal;
  }
};
