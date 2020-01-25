<template>
  <div class="iframeContainer">
    <iframe
      allowfullscreen
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src="https://www.youtube.com/embed/LEl60NRhknE?autoplay=1&origin=http://example.com"
      frameborder="0"
      modestbranding
    ></iframe>
  </div>
</template>

<style scoped>
.iframeContainer {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
}
.iframeContainer iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
