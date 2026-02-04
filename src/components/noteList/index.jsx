// import NoteItem from "../noteItem";

// function NoteList({ notes }) {
//   return (
//     <ul>
//       {notes.map((note) => (
//         <NoteItem key={note.id} note={note} />
//       ))}
//     </ul>
//   );
// }

// export default NoteList;

import NoteItem from "../noteItem";

function NoteList({ notes }) {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </ul>
  );
}

export default NoteList;
