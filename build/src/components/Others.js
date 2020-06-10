const Dot = ({n}) => h("div", {
  className: "dot",
  style: {
    fontSize: n * 10 + "rem"
  }
}, ".");
const Circle = ({n}) => h("center", null, h("svg", {
  height: "100",
  width: "100"
}, h("circle", {
  cx: "50",
  cy: "50",
  r: n,
  stroke: "black",
  "stroke-width": "3",
  fill: "white"
})));
