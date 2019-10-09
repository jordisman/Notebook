/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import AddNote from '../../components/AddNote/AddNote';
import Note from '../../components/Note/Note'
import Button from '../../components/Button';
// import Notes from '../AddNotePage/index';

import { connect } from 'react-redux';

export default function HomePage() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <p>
        <FormattedMessage {...messages.p} />
      </p>
      <AddNote />
      <Note />
      <Button />
    </div>
  );
}
