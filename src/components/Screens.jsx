/* @jsx h */
import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import css from "../utils/css.js";

import Screen from "./Screen.jsx";
import Controls from "./Controls.jsx";

const sounds = {
  clap: new Audio("http://bbcsfx.acropolis.org.uk/assets/07070114.wav"),
};

export default () => {
  const [pause, setPause] = useState(true);
  const pages = [useState(0), useState(0), useState(0), useState(0)];
  const setPages = (i) => (n) => pages[i][1](n);
  const max = pages.reduce((r, [i]) => Math.max(r, i), 0);
  const [page, setPage] = useState(0);
  const onChange = () => {
    sounds.clap.pause();
    sounds.clap.currentTime = 0;
    sounds.clap.play();
  };
  return (
    <>
      <main>
        <Screen
          screen={0}
          onChange={onChange}
          onPages={setPages(0)}
          pause={pause}
          page={page}
        />
        <Screen screen={1} onPages={setPages(1)} pause={pause} page={page} />
        <Screen screen={2} onPages={setPages(2)} pause={pause} page={page} />
        <Screen screen={3} onPages={setPages(3)} pause={pause} page={page} />
      </main>
      <Controls max={max} pause={pause} setPage={setPage} setPause={setPause} />
    </>
  );
};

css`
  main {
    height: 100vh;
    max-width: 100vw;
    display: grid;
    overflow: hidden;
  }

  @media screen and (orientation: landscape) {
    main {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }

  main > * {
    overflow: hidden;
  }
`;
