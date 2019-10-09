import * as actionTypes from './actions';

const initialState = {
  notes: []
}

const reducer = ( state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
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

export default reducer;