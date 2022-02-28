import React, {ChangeEvent, useState} from 'react';

interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({addNote}) => {
  const [note, setNote] = useState('')

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }

  const onAddNoteClick = () => {
    addNote(note)
    setNote('')
  }

  return(
    <div>
      <input value={note} onChange={updateNote} type='text' name='note' placeholder='Note'/>
      <button onClick={onAddNoteClick}>Add Note</button>    
    </div>
  )
} 

