import React from "react";
import ReactDOM from "react-dom";


function MyComponent(props) {
  return (
    <div style={{padding: '30px', backgroundColor: 'lightblue'}}>
      <button>{props.text}</button>
    </div>
  )
}

function App() {
  const style = {
    padding: '40px',
    textAlign: 'center',
  }

  return (
    <>
      <div style={style}>Welcome to React!</div>
      <MyComponent text="button1" />
      <MyComponent text="button2" />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"))
