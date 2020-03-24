import Vue from "vue";

Vue.prototype.$getRandomColor = function() {
  var colors = [
    "ec879b",
    "b4dcfc",
    "fcdc94",
    "a8a6c3",
    "a897cf",
    "93d7d5",
    "96c0c5",
    "9bc7b6",
    "8be0c7",
    "c9d1d8",
    "7aab55",
    "fad1a7",
    "b7aec2"
  ];
  return "#" + colors[Math.floor(Math.random() * Math.floor(14))];
};
