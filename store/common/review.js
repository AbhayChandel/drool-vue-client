export const state = () => ({
  reviewType: "text",
  selectedProduct: {
    id: "",
    name: ""
  }
});

export const mutations = {
  setReviewType(state, reviewType) {
    state.reviewType = reviewType;
  },
  setSelectedProduct(state, selectedProduct) {
    state.selectedProduct = selectedProduct;
  }
};

export const getters = {
  getReviewType: state => {
    return state.reviewType;
  },
  getSelectedProduct: state => {
    return state.selectedProduct;
  }
};
