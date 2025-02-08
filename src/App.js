import React from 'react';
import {createRoot} from "react-dom";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name,
      React.createElement("p", {}, props.description))
  ])
}

const App = () => {
  return React.createElement(
    "div",
    {className: "App"},
    [
      React.createElement("h1", {}, "Pedro ginos"),
      React.createElement(Pizza, {
        name: "Pedro ginos",
        description: "Pedro ginos",
      }),
      React.createElement(Pizza, {
        name: "Mozzarella",
        description: "my mozzarella",
      }),
      React.createElement(Pizza),
      React.createElement(Pizza)
    ]
  )
}

const container = document.getElementById("root")
const root = createRoot(container);
root.render(React.createElement(App))