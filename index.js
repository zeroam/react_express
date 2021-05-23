import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components'

function randomColor() {
  const color = `#${Math.random().toString(16).substr(-6)}`;
  console.log(color);
  return color;
}

const Card = styled.div`
  padding: 20px;
  text-align: center;
  color: white;
  background-color: ${props => props.color};
`

const Container = styled.div`
  padding: 20px;
`

function App() {
  const [color, setColor] = useState("skyblue");

  const style = {
    padding: "40px",
    textAlign: "center",
  };

  return (
    <>
      <div style={style}>Welcome to React!</div>
      <Container>
        <Card color={color}>
          <input
            type={'button'}
            value={'Randomize Color'}
            onClick={() => setColor(randomColor())}
          />
        </Card>
      </Container>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
