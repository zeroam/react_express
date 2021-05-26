import React, { useState } from "react";
import ReactDOM from "react-dom";

// Rendering with &&
function Card({ title, subtitle }) {
  return (
    <div style={styles.card}>
      <h1 style={styles.title}>{title}</h1>
      {subtitle && <h2 style={styles.subtitle}>{subtitle}</h2>}
    </div>
  );
}

// Rendering with ternary ?
function Card2({ title, subtitle }) {
  return (
    <div style={styles.card}>
      <h1 style={styles.title}>{title}</h1>
      {subtitle ? (
        <h2 style={styles.subtitle}>{subtitle}</h2>
      ) : (
        <h3 style={styles.empty}>No subtitle</h3>
      )}
    </div>
  );
}

// Rendering with if/else
function Card3({ loading, error, title, subtitle }) {
  let content

  if (error) {
    content = 'Error'
  } else if (loading) {
    content = <h3 style={styles.empty}>Loading...</h3>
  } else {
    content = (
      <div>
        <h1 style={styles.title}>{title}</h1>
        {subtitle ? (
          <h2 style={styles.subtitle}>{subtitle}</h2>
        ) : (
          <h3 style={styles.empty}>No subtitle</h3>
        )}
      </div>
    )
  }

  return <div style={styles.card}>{content}</div>
}

function App() {
  return (
    <>
      <div style={{ padding: "40px", textAlign: "center" }}>
        Welcome to React!
      </div>
      <Card title={"Title &&"} />
      <Card title={"Title &&"} subtitle={"Subtitle"} />
      <Card2 title={"Title ?"} />
      <Card2 title={"Title ?"} subtitle={"Subtitle"} />
      <Card3 error={true} />
      <Card3 loading={true} />
      <Card3 loading={false} title={'Title'} subtitle={'Subtitle'} />
    </>
  );
}

// styles below the main logic
const styles = {
  card: {
    padding: "20px",
    margin: "20px",
    textAlign: "center",
    color: "white",
    backgroundColor: "steelblue",
    border: "1px solid rgba(0,0,0,0.15)",
  },
  title: {
    fontSize: "18px",
    lineHeight: "24px",
  },
  subtitle: {
    fontSize: "14px",
    lineHeight: "18px",
  },
  empty: {
    fontSize: "12px",
    lineHeight: "15px",
    opacity: "0.5",
  },
};

ReactDOM.render(<App />, document.querySelector("#app"));
