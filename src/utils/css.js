import "construct-style-sheets-polyfill";

export default (strings) => {
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", () => adopt(strings));
  } else {
    adopt(strings);
  }
};

const sheets = new Set();
const sheet = new CSSStyleSheet();
const adopt = (strings) => {
  sheets.add(strings.join(""));
  const list = [...sheets].join("").split("\n");
  sheet.replace(
    [
      ...list.filter((item) => item.includes("@import")),
      ...list.filter((item) => !item.includes("@import")),
    ].join("")
  );
  document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
};
