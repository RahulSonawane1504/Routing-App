// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let timeOut = setInterval(() => {
//       setCount((count) => count + 1);
//     }, 1000);

//     return () => clearTimeout(timeOut);
//   }, []);

//   return <h2>i've rendered {count} times !!</h2>;
// }

// export default Timer;

// import React, { useState, useEffect } from "react";

// const Counter = () => {
//   const [counts, setCounts] = useState([0]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounts((prev) =>
//         prev.map((count) => (count < 100 ? count + 1 : count))
//       );
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
//       {counts.map((count, index) => (
//         <div key={index} style={{ textAlign: "center" }}>
//           <h3>Counter {index + 1}</h3>
//           <p style={{ fontSize: "20px" }}>{count}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Counter;

import { useState, useEffect } from "react";
// import ReactDOM from “react-dom/client”;

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeOut = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    if (count === 10) {
      clearInterval(timeOut);
    }
    return () => clearInterval(timeOut);
  }, [count]);
  return <h1> I’ve rendered {count} times!! </h1>;
}

export default Timer;
