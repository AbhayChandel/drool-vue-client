export const state = () => ({
  productTaggingInFocus: false,
  review: {
    reviewType: "text",
    selectedProduct: {},
    textReviewForm: {},
    videoReviewForm: {},
    aspects: [],
    brandReview: [],
    recommendation: 0
  }
});

export const mutations = {
  setProductTaggingInFocus(state, inFocus) {
    state.productTaggingInFocus = inFocus;
  },
  setReviewType(state, reviewType) {
    state.review.reviewType = reviewType;
  },
  setSelectedProduct(state, selectedProduct) {
    state.review.selectedProduct = selectedProduct;
  },
  setTextReviewForm(state, textReviewForm) {
    state.review.textReviewForm = textReviewForm;
  },
  setVideoReviewForm(state, videoReviewForm) {
    state.review.videoReviewForm = videoReviewForm;
  },
  setAspects(state, aspects) {
    Object.assign(state.review.aspects, aspects);
  },
  setBrandReview(state, brandReview) {
    Object.assign(state.review.brandReview, brandReview);
  },
  setRecommendation(state, recommendation) {
    state.review.recommendation = recommendation;
  },
  resetReviewStoreState(state) {
    state.productTaggingInFocus = false;
    state.review.reviewType = "text";
    state.review.selectedProduct = {};
    state.review.textReviewForm = {};
    state.review.videoReviewForm = {};
    state.review.aspects = [];
    state.review.brandReview = [];
    state.review.recommendation = 0;
  }
};

export const getters = {
  getProductTaggingInFocus: state => {
    return state.productTaggingInFocus;
  },
  getReviewType: state => {
    return state.review.reviewType;
  },
  getSelectedProduct: state => {
    return state.review.selectedProduct;
  },
  getTextReviewForm: state => {
    return state.review.textReviewForm;
  },
  getVideoReviewForm: state => {
    return state.review.videoReviewForm;
  },
  getReview: state => {
    return state.review;
  }
};

export const actions = {
  getProductAspects(vuexContext, productId) {
    return new Promise((resolve, reject) => {
      console.log("productId: " + productId);
      this.$axios
        .$get(`/product/aspecttemplates/id/${productId}`)
        .then(response => {
          resolve(response);
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
