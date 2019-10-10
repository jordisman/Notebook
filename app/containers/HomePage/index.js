/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectNote,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import {addNote} from './actions';

import AddNote from '../../components/AddNote/AddNote';
// import NotesList from '../../components/NotesList/NotesList';
import Note from '../../components/Note/Note'
import Button from '../../components/Button';

// import reducer from './reducer';
// import saga from './saga';

// const key = 'home';

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


HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  note: PropTypes.string,
  onChange: PropTypes.func
};

// const mapStateToProps = state => {
//   return {
//     notes: state.notes
//   };
// };

const mapStateToProps = createStructuredSelector({
  note: makeSelectNote(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => dispatch(addNote(e.target.value)),
    onSubmitForm: evt => {
      if (e !== undefined && e.preventDefault) e.preventDefault();
      dispatch(loadRepos());
    },
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
