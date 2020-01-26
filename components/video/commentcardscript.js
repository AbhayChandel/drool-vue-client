export default {
  props: {
    commentId: {
      type: Number,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      required: true
    },
    datePosted: {
      type: String,
      required: true
    },
    userId: {
      type: Number,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
};
