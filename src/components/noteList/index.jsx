import NoteItem from "../noteItem";

function NoteList({ notes }) {
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <NoteItem key={note.id} {...note} />
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
