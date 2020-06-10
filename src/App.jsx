/* @jsx h */
import { h, Fragment } from "preact";
import css from "./utils/css.js";

import Screens from "./components/Screens.jsx";
import { useState } from "preact/hooks";

export default () => {
  const [ready, setReady] = useState(false);
  return !ready ? (
    <div onClick={() => setReady(true)} className="grid">
      <span style="grid-column: span 2;">Click to start</span>
      <small>
        Note: Controls over the website behaviour are available when you hover
        your cursor at the center of the screen.
      </small>
    </div>
  ) : (
    <Screens />
  );
};
css`
  @import "assets/fonts/autopia/autopia-stylesheet.css";
  @import "assets/fonts/tgl/tgl.css";

  :root {
    --primary: #f9f952; /*#dcbaf8;*/
    --secondary: black;
    --border: 0.1rem solid var(--secondary);
  }

  html {
    font-size: 10px;
    height: 100%;
  }

  body {
    margin: 0;
    font-size: 1.7rem;
    height: 100%;
  }

  body,
  button {
    font-family: "Autopia-Regular";
  }

  #app {
    height: 100%;
  }

  #app > div {
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 100%;
    font-size: 3rem;
  }
`;
