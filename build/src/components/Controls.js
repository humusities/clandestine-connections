import {h, Fragment} from "preact";
import css2 from "./../../../src/utils/css.js";
import {useEffect} from "preact/hooks";
export default ({max, pause, setPage, setPause}) => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      e.keyCode === 37 && setPage((p) => Math.max(0, p - 1 + Math.random() / 100));
      e.keyCode === 39 && setPage((p) => Math.max(0, p + 1 + Math.random() / 100));
    });
  }, []);
  return h("div", {
    className: "overlay"
  }, h("span", null, "Controls"), h("div", null, [...Array(max).keys()].map((i) => h("button", {
    onClick: () => setPage(i + Math.random())
  }, i + 1)), h("button", {
    onClick: () => setPause((prev) => !prev)
  }, pause ? "Play" : "Pause")));
};
css2`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }

  .overlay > div {
    display: none;
    pointer-events: all;
  }
  .overlay > span {
    pointer-events: all;
    color: transparent;
    background: transparent;
    user-select: none;
    font-size: 5rem;
    width: 100%;
  }
  .overlay > span:hover + div,
  .overlay > div:hover {
    display: flex;
    position: absolute;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .overlay button {
    border: var(--border);
    font-size: 1.7rem;
    background: white;
    padding: 1rem 2rem;
    margin: 1rem;
    cursor: pointer;
  }
`;
