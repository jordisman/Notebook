import {ADD_NOTE} from './constants';

export function addNote(note) {
  return {
    type: ADD_NOTE,
    note
  };
}