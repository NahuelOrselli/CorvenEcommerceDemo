import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import reportWebVitals from "./reportWebVitals";
import "./assets/css/index.css";
import { createRoot } from "react-dom/client";

////// REACT 18!!
createRoot(document.getElementById("root")).render(<App />);

////// REACT 17!!
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
