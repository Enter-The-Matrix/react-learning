{/* <div id="parent">
  <div id="child">
    <h1></h1>
    <h2></h2>
  </div>
</div>; */}

const parent = React.createElement(
  "div",
  { id: "parent" },

  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 Tag of react"),
    React.createElement("h2", {}, "I am H2 Tag of react")
  ])
);

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     xyz: "laalala",
//   },
//   "Hello World From React"
// );
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
