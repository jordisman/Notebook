/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';

import AddNote from '../../components/AddNote/AddNote';
import Note from '../../components/Note/Note'
import Button from '../../components/Button';



export function HomePage({
  note,
  loading,
  error,
  onSubmitForm,
  onChange,
}) {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <p>
        <FormattedMessage {...messages.p} />
      </p>
      <Section>
      <Form onSubmit={onSubmitForm}>
        <Input
          id="note"
          type="text"
          placeholder="Add Note"
          value={note}
          onChange={onChange}
        />
        </Form>
      </Section>
      <Button />
    </div>
  );
}

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


HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  note: PropTypes.string,
  onChange: PropTypes.func
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddedNote: (note) => dispatch({
      type: actionTypes.ADD_NOTE,
      noteData: {
        note: note
      }
    })
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage, Notes);
