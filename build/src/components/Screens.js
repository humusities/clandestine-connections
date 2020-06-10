import {h, Fragment} from "preact";
import {useState} from "preact/hooks";
import css2 from "./../../../src/utils/css.js";
import Screen2 from "./../../../src/components/Screen.jsx";
import Controls2 from "./../../../src/components/Controls.jsx";
const sounds = {
  clap: new Audio("assets/audio/07070114.wav")
};
export default () => {
  const [pause, setPause] = useState(false);
  const pages = [useState(0), useState(0), useState(0), useState(0)];
  const setPages = (i) => (n) => pages[i][1](n);
  const max = pages.reduce((r, [i]) => Math.max(r, i), 0);
  const [page, setPage] = useState(0);
  const onChange = () => {
    sounds.clap.pause();
    sounds.clap.currentTime = 0;
    sounds.clap.play();
  };
  return h(Fragment, null, h("main", null, h(Screen2, {
    screen: 0,
    onChange,
    onPages: setPages(0),
    pause,
    page
  }), h(Screen2, {
    screen: 1,
    onPages: setPages(1),
    pause,
    page
  }), h(Screen2, {
    screen: 2,
    onPages: setPages(2),
    pause,
    page
  }), h(Screen2, {
    screen: 3,
    onPages: setPages(3),
    pause,
    page
  })), h(Controls2, {
    max,
    pause,
    setPage,
    setPause
  }));
};
css2`
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
