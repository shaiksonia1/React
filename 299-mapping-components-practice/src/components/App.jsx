import React from "react";
import Entry from "./entry";
import emojipedia from "../emojipedia";


function createEntry(emojiTerm){
  return <Entry
  key = {emojiTerm.id}
  emoji ={emojiTerm.emoji}
  Name ={emojiTerm.name}
  description ={emojiTerm.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
