/* @jsx h */
import { h, Fragment } from "preact";
import { useRef, useEffect, useState } from "preact/hooks";
import createWorld from "aworld";

export default ({ geojson, options, style, className }) => {
  const ref = useRef();
  const [json, setJson] = useState();
  useEffect(() => {
    if (typeof geojson === "string")
      fetch(geojson)
        .then((r) => r.json())
        .then(setJson);
    else setJson(geojson);
  }, [geojson]);
  useEffect(() => {
    const { map } = createWorld(ref.current, json, options);
    ref.current.appendChild(map);
    return () => map.remove();
  }, [json, options]);
  return <div ref={ref} style={style} className={className}></div>;
};

// <World
//   geojson="https://raw.githubusercontent.com/nestarz/aworld/master/example/world.json"
//   options={{
//     zoom: 3,
//     center: [10, 20],
//   }}
// />
