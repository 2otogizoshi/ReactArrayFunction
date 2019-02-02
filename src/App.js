import React from "react";

/*function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>How to render an array of objects in React using map function!</h2>
    </div>
  );
}*/

class App extends React.Component {
  //setting data
  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          _id: "12345",
          title: "yahoo",
          url: "yahoo"
        },
        {
          _id: "67890",
          title: "google",
          url: "google.com"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>How to render an array of objects in React using map function!</h2>
        <h2>
          {this.state.Data.map((item, index) => (
            <p>{(title, index)}</p>
          ))}
        </h2>
      </div>
    );
  }
}

export default App;
