import React from 'react';


class NotesItem extends React.Component {
  render() {
    return (
      <div >

      {
        this.props.notes.map(note => (
          <Note note = {note.note} />
        ))
      }
      </div>
    );
  }
}

export default NotesItem;