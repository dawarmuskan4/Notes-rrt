import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from './actions';
import { NewNoteInput } from './NewNoteInput';
import { NoteState } from './notesReducer';

function App() {
  const notes = useSelector<NoteState, NoteState['notes']>((state) => state.notes)
  const dispatch = useDispatch()
  const onAddNote = (note: string) => {
    dispatch(addNote(note))
  }
  return (
    <>
      <NewNoteInput addNote={onAddNote}/>
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>
        })}
      </ul>
    </>
  );
}

export default App;
