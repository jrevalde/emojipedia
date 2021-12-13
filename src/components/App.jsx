import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function Create_Entry(input) {
  return (
    <Entry
      key={input.id}
      emoji={input.emoji}
      name={input.name}
      meaning={input.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(Create_Entry)}</dl>
    </div>
  );
}

export default App;
