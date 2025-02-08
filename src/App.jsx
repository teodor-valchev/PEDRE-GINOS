import React from 'react';
import {createRoot} from "react-dom/client";
import {Pizza} from "./Pizza";

const App = () => {
  return <Pizza title="Pizza" description="Pizza"/>
}

const container = document.getElementById("root")
const root = createRoot(container);
root.render(React.createElement(App))