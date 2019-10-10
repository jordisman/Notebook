/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {ALL_NOTES} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  noteData: {
    notes: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ALL_NOTES:
        draft.loading = true;
        draft.error = false;
        draft.noteData.note = false;
        break;
    }
  });

export default appReducer;
