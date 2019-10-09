import React from 'react';

const Note = (props) => {
  console.log('props in note', props);
  return (
    <div>
      <h3>Note{props.note}</h3>
    </div>
  );
}

export default Note;