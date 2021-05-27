import React, { useContext, createContext } from "react";
import ReactDOM from "react-dom";

const ThemeConext = createContext();

function Title() {
  const theme = useContext(ThemeConext);

  const style = {
    background: theme.primary,
    color: theme.text,
  }

  return <h1 style={style}>Title</h1>
}

function Nested() {
  return <Title />
}

function NestedTwice() {
  return <Nested />
}

function App() {
  const theme = {
    primary: 'dodgerblue',
    text: 'white',
  }

  return (
    <>
      <div style={{ padding: "40px", textAlign: "center" }}>
        Welcome to React!
      </div>
      <ThemeConext.Provider value={theme}>
        <NestedTwice />
      </ThemeConext.Provider>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
