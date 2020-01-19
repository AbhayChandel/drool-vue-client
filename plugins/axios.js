export default function({ $axios, redirect, app, store }) {
  $axios.onRequest(config => {
    var requestURL = config.url;
    console.log("Making request to " + requestURL);
    if (requestURL.search("view") < 0 && requestURL.search("accessall") < 0) {
      const token = store.state.user.account.token;
      if (token) {
        config.headers.common["Authorization"] = `Bearer ${token}`;
        console.log("Added authorization header to " + requestURL);
      }
    }
  });

  /* $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/400");
    }
  }); */
}
