export default function({ $axios, redirect, app, store }) {
  $axios.onRequest(config => {
    var requestURL = config.url;
    console.log("Making request to " + requestURL);
    if (
      !doesEndpointContainView(requestURL) &&
      requestURL.search("accessall") < 0
    ) {
      const token = store.state.user.account.token;
      if (token) {
        config.headers.common["Authorization"] = `Bearer ${token}`;
        console.log("Added authorization header to " + requestURL);
      }
    }
  });

  function doesEndpointContainView(url) {
    return new RegExp("\\bview\\b", "i").test(url);
  }

  /* $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/400");
    }
  }); */
}
