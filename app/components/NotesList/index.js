import React from 'react';
import Note from '../Note/Note';

function NotesList(props) {
  return (
    <div>
      {props.notes.map(note => (
        <Note note={note} />
      ))}
    </div>
  )
}

export default NotesList;