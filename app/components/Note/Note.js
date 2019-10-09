import React from 'react';
import { notStrictEqual } from 'assert';

const Note = (props) => {
  return (
    <div>
      <h1>{props.note}</h1>
    </div>
  );
}

export default Note;