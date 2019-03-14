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

  return {
    type: "div",
    props: {
      children: [
        {
          type: "p",
          props: {
            style: { color: getLabelColor(count) },
            children: `Button clicked ${count} times`
          },
          ref: null,
          $$typeof: Symbol.for("react.element")
        },
        {
          type: "button",
          props: {
            onClick: () => setCount(count - 1),
            children: '-'
          },
          ref: null,
          $$typeof: Symbol.for("react.element")
        },
        {
          type: "button",
          props: {
            onClick: () => setCount(count + 1),
            children: '+'
          },
          ref: null,
          $$typeof: Symbol.for("react.element")
        }
      ]
    },
    ref: null,
    $$typeof: Symbol.for("react.element")
  };
};

const domContainer = document.getElementById("container");
ReactDOM.render(React.createElement(Counter), domContainer);
