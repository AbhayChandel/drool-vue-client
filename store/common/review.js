export const state = () => ({
  productTaggingInFocus: false,
  review: {
    reviewType: "text",
    selectedProduct: {},
    textReviewForm: {},
    videoReviewForm: {},
    aspects: [],
    brandCriteriaRatingsDetails: {
      brandCriteriaRatings: [],
      brandRef: {},
    },
    recommendation: 0,
  },
  brandRatingMetrics: [],
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
    this.commit(
      "common/review/addBrandRefToBrandReview",
      selectedProduct.brand
    );
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
  trimAspects(state) {
    var tempAspects = state.review.aspects;
    for (var i = tempAspects.length - 1; i >= 0; --i) {
      if (tempAspects[i].selected.length == 0) {
        tempAspects.splice(i, 1);
      } else {
        delete tempAspects[i].options;
      }
    }
  },
  setBrandReview(state, brandReview) {
    if (
      state.review.brandCriteriaRatingsDetails.brandCriteriaRatings == undefined
    ) {
      state.review.brandCriteriaRatingsDetails.brandCriteriaRatings = [];
    }
    Object.assign(
      state.review.brandCriteriaRatingsDetails.brandCriteriaRatings,
      brandReview
    );
  },
  addBrandRefToBrandReview(state, brandRef) {
    state.review.brandCriteriaRatingsDetails.brandRef = brandRef;
  },
  setRecommendation(state, recommendation) {
    state.review.recommendation = recommendation;
  },
  setBrandRatingMetrics(state, brandRatingMetrics) {
    state.brandRatingMetrics = brandRatingMetrics;
  },
  resetReviewStoreState(state) {
    state.productTaggingInFocus = false;
    state.review.reviewType = "text";
    state.review.selectedProduct = {};
    state.review.textReviewForm = {};
    state.review.videoReviewForm = {};
    state.review.aspects = [];
    state.review.brandCriteriaRatingsDetails = {};
    state.review.recommendation = 0;
    state.reviewPosted = false;
  },
};

export const getters = {
  getProductTaggingInFocus: (state) => {
    return state.productTaggingInFocus;
  },
  getReviewType: (state) => {
    return state.review.reviewType;
  },
  getSelectedProduct: (state) => {
    return state.review.selectedProduct;
  },
  getTextReviewForm: (state) => {
    return state.review.textReviewForm;
  },
  getVideoReviewForm: (state) => {
    return state.review.videoReviewForm;
  },
  getBrandRatingMetrics: (state) => {
    return state.brandRatingMetrics;
  },
  getReview: (state) => {
    return state.review;
  },
};

export const actions = {
  getReviewForms(vuexContext, details) {
    return new Promise((resolve, reject) => {
      console.log(
        "productId: " + details.productId + " BrandId: " + details.brandId
      );
      this.$axios
        .$get(`/product/review/forms/${details.productId}/${details.brandId}`)
        .then((response) => {
          vuexContext.commit(
            "setBrandRatingMetrics",
            response.brandRatingMetrics
          );
          resolve(response.aspectTemplates);
        })
        .catch((error) => {
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
  },
  postReview(vuexContext, review) {
    return new Promise((resolve, reject) => {
      const userRefDto = {
        id: vuexContext.rootState.user.account.userDetails.userId,
        username: vuexContext.rootState.user.account.userDetails.username,
      };
      this.$axios
        .$post("/product/review/save", {
          reviewType: review.review.reviewType,
          aspects: review.review.aspects,
          brandCriteriaRatingsDetails:
            review.review.brandCriteriaRatingsDetails,
          recommendation: review.review.recommendation,
          product: review.review.selectedProduct,
          textReview: review.review.textReviewForm,
          videoReview: review.review.videoReviewForm,
          user: {
            id: vuexContext.rootState.user.account.userDetails.userId,
            username: vuexContext.rootState.user.account.userDetails.username,
          },
        })
        .then((data) => {
          console.log(data);
          resolve(data);
        })
        .catch((error) => {
          reject();
          console.error("In topic store: " + error);
        });
    });
  },
};
