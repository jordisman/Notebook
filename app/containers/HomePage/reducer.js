import {ADD_NOTE} from './actions';

const initialState = {
  notes: []
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newNote = {
        note: action.noteData.note
      }
      return {
        ...state,
        notes: state.notes.concat(newNote)
      }
  }
  return state;
};

export default homeReducer;