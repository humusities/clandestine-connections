import { h, render } from "preact";

import App from "./App.jsx";

render(
  h(App),
  document.body.insertBefore(
    Object.assign(document.createElement("div"), { id: "app" }),
    document.body.firstChild
  )
);
