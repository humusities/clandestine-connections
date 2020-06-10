/* @jsx h */
import { h, Fragment, cloneElement } from "preact";
import { useState, useEffect } from "preact/hooks";
import css from "../utils/css.js";

export default ({
  d,
  pause,
  initial,
  children,
  screen,
  onChange = () => null,
  onCount = () => null,
}) => {
  const [index, setIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const childrens = Array.isArray(children) ? children : [children];
  useEffect(() => initial && setIndex(Math.floor(initial)), [initial]);
  useEffect(() => {
    let id;
    if (!pause) {
      id = setTimeout(function update(i = Math.floor(initial) || 0) {
        const newIndex = i % childrens.length;
        setIndex(newIndex);
        const child = childrens[newIndex % childrens.length];
        const duration = child.d ?? d[newIndex % childrens.length];
        id = setTimeout(() => update(i + 1), duration ?? 1000);
      });
    }
    return () => clearTimeout(id);
  }, [initial, pause]);
  useEffect(() => {
    onCount(children.length);
  }, [children]);
  useEffect(() => {
    if (pause) return;
    let start, req;
    req = requestAnimationFrame(function animate(timestamp) {
      if (!start) start = timestamp;
      setElapsed(timestamp - start);
      req = requestAnimationFrame(animate);
    });
    return () => cancelAnimationFrame(req);
  }, [pause, index]);
  useEffect(async () => {
    onChange(index);
    parent.location.hash = "#/" + index;
  }, [index]);
  const child = childrens[index % childrens.length];
  const duration = child.d || d[index % childrens.length];
  return (
    <>
      {cloneElement(child, {
        children: [
          <span
            className="elapsed"
            style={{
              width: (100 * elapsed) / duration + "%",
            }}
          >
            {(Math.round((duration - elapsed) / 100) / 10).toFixed(1)}:
            {duration / 1000}
          </span>,
          Array.isArray(child.props.children)
            ? child.props.children[screen % child.props.children.length]
            : child.props.children,
        ],
      })}
    </>
  );
};

css`
  .elapsed {
    position: absolute;
    top: 0rem;
    left: 0;
    user-select: none;
    height: 0.1rem;
    color: transparent;
    background-color: black;
  }
`;
