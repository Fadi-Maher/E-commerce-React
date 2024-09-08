// import   { useRef, useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);
//   const previousCountRef = useRef(count); // This holds the previous value

//   const increment = () => {
//     previousCountRef.current = count; // Update the previous value
//     setCount(count + 1); // Increase the counter
//   };

//   return (
//     <div className="mt-20">
//       <p>Current Count: {count}</p>
//       <p>Previous Count: {previousCountRef.current}</p>
//       <button className="bg-blue-600 p-2 text-white rounded" onClick={increment}>Increase Counter</button>
//     </div>
//   );
// }

// export default Counter;
