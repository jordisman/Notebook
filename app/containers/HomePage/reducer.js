import {ADD_NOTE} from './constants';
import produce from 'immer';

const initialState = {
  note: '',
  notes: ['Example note 1']
}

const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_NOTE:
        draft.note = action.note;
        break;
    }
  });

export default homeReducer;