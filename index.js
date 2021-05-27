import React, { useState } from "react";
import ReactDOM from "react-dom";

// Passing objects
function TabsObj({ tabs }) {
  const [selectedId, setSelectedId] = useState(tabs[0].id);

  return (
    <div>
      {tabs.map(({ id, title }) => {
        return (
          <button
            key={id}
            onClick={() => {
              setSelectedId(id);
            }}
            style={{
              border: "none",
              background: id === selectedId ? "dodgerblue" : "transparent",
            }}
          >
            {title}
          </button>
        );
      })}
      <hr />
      <div>{tabs.find((tab) => tab.id == selectedId).content}</div>
    </div>
  );
}

// Render props
function TabsProps({ tabIds, renderTitle, renderContent }) {
  const [selectedId, setSelectedId] = useState(tabIds[0]);

  return (
    <div>
      {tabIds.map((id) => {
        return <button
          key={id}
          onClick={() => {
            setSelectedId(id);
          }}
          style={{
            border: "none",
            background: id === selectedId ? "dodgerblue" : "transparent",
          }}
        >
          {renderTitle(id)}
        </button>;
      })}
      <hr />
      <div>{renderContent(selectedId)}</div>
    </div>
  );
}

function App() {
  return (
    <>
      <div style={{ padding: "40px", textAlign: "center" }}>
        Welcome to React!
      </div>
      <TabsObj
        tabs={[
          { id: "a", title: "Tab A", content: "Tab content A" },
          { id: "b", title: "Tab B", content: "Tab content B" },
          { id: "c", title: "Tab C", content: "Tab content C" },
        ]}
      />
      <br />
      <TabsProps
        tabIds={["a", "b", "c"]}
        renderTitle={(id) => `Tab ${id.toUpperCase()}`}
        renderContent={(id) => `Tab content ${id.toUpperCase()}`}
      />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
