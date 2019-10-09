import React from 'react';
import { connect } from 'react-redux';

import Note from '../../components/Note/Note';
import AddNote from '../../components/AddNote/AddNote';

class Notes extends React.Component {
  render() {
    return (
      <div>
        <AddNote noteAdded={this.props.onAddedNote} />
        {this.props.notes.map(note => (
          <Note note={note.note} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddedNote: (note) => dispatch({type: actionTypes.ADD_NOTE, noteData: {note: note}})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);