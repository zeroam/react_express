import React, { useReducer } from "react";
import ReactDOM from "react-dom";

const types = {
  PET: "PET",
  COLOR: "COLOR",
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.PET:
      return { ...state, pet: action.value };
    case types.COLOR:
      return { ...state, color: action.value };
  }
};

const initialState = {
  color: 'black',
  pet: 'cat',
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div style={{ padding: "40px", textAlign: "center" }}>
        Welcome to React!
      </div>
      <div>
        <label>Choose a color and a pet: </label>
        <br />
        <select
          value={state.color}
          onChange={event=> {
            dispatch({ type: types.COLOR, value: event.target.value})
          }}
        >
          <option value="black">Black</option>
          <option value="pink">Pink</option>
          <option value="blue">Blue</option>
        </select>
        <select
          value={state.pet}
          onChange={event => {
            dispatch({ type: types.PET, value: event.target.value})
          }}
        >
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="mouse">Mouse</option>
        </select>
        <br />
        <br />
        You choose a {state.color} {state.pet}
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
