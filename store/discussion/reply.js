export const state = () => ({});

export const actions = {
  postReply(vuexContext, details) {
    return new Promise((resolve, reject) => {
      console.log(
        "discussionTopicId: " +
          details.discussionTopicId +
          ". reply: " +
          details.reply +
          ". " +
          "userId: " +
          details.userId
      );
      this.$axios
        .$post("/discussion/reply/post", {
          discussionTopicId: details.discussionTopicId,
          reply: details.reply,
          userId: details.userId
        })
        .then(data => {
          console.log(data);
          resolve();
        })
        .catch(error => {
          reject();
        });
    });
  }
};

export const mutations = {};

export const getters = {};
