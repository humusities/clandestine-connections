const Dot = ({ n }) => (
    <div className="dot" style={{ fontSize: n * 10 + "rem" }}>
      .
    </div>
  );
  
  const Circle = ({ n }) => (
    <center>
      <svg height="100" width="100">
        <circle
          cx="50"
          cy="50"
          r={n}
          stroke="black"
          stroke-width="3"
          fill="white"
        />
      </svg>
    </center>
  );