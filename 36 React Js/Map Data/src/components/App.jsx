import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(emocard){
  return(
    <Entry
      id={emocard.id}
      key={emocard.id}
      emoji={emocard.emoji}
      name={emocard.name}
      desc={emocard.meaning}
    />
  )
}

console.log(emojipedia);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEntry)}

        {/* <Entry
          id={emojipedia.id}
          key={emojipedia.id}
          emoji="😭"
          name="Crying"
          desc="A face crying violently 😭 symbolizes despair and inconsolability, while the tears flow from the eyes like a waterfall. It represents feelings of sadness, pain, or defeat, and is sometimes used in ironic contexts."
        /> */}
      </dl>
    </div>
  );
}

export default App;
