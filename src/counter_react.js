function getLabelColor(count) {
  if (count % 3 == 0 && count % 5 == 0) {
    return "blue";
  } else if (count % 3 == 0) {
    return "red";
  } else if (count % 5 == 0) {
    return "green";
  } else {
    return "black";
  }
}

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return React.createElement(
    "div",
    {},
    React.createElement(
      "p",
      { style: { color: getLabelColor(count) } },
      `Button clicked ${count} times`
    ),
    React.createElement("button", { onClick: () => setCount(count - 1) }, `-`),
    React.createElement("button", { onClick: () => setCount(count + 1) }, `+`)
  );
};

const domContainer = document.getElementById("container");
ReactDOM.render(React.createElement(Counter), domContainer);
