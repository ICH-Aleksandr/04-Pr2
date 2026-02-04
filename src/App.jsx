// Отобразить массив notes на экране
//  виде списка (NoteList -> NoteItem)

import { useState } from "react";
import NoteForm from "./components/noteForm";
import NoteList from "./components/noteList";

function App() {
  const [notes, setNotes] = useState([]);

  console.log(notes);

  return (
    <div>
      <NoteForm setNotes={setNotes} notes={notes} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
