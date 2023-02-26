import React, {useState} from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';


function App() {
    const [noteTitle, setNoteTitle] = useState('');
    const [notes, setNotes] = useState([]);
    const [editMode, setEditMode] = useState(false)
    const [editAbleNote, setEditAbleNote] = useState(null)
    console.clear();
    return (
        <div className='App'>
            <NoteForm
                noteTitle={noteTitle}
                setNoteTitle ={setNoteTitle}
                notes = {notes}
                setNotes = {setNotes}
                setEditMode = {setEditMode}
                editMode = {editMode}
                editAbleNote = {editAbleNote}
            />
            <NotesList
                setNoteTitle = {setNoteTitle}
                notes = {notes}
                setNotes = {setNotes}
                setEditMode = {setEditMode}
                setEditAbleNote = {setEditAbleNote}
            />
        </div>
    );
}

export default App;
