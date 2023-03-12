import React, { useState, useEffect } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';

function App() {
    const [noteTitle, setNoteTitle] = useState('');
    const [notes, setNotes] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editAbleNote, setEditAbleNote] = useState(null);

    const getAllNotes = () => {
        fetch(`http://localhost:4000/notes`)
            .then((res) => res.json())
            .then((data) => {
                setNotes(data);
            });
    };

    useEffect(() => {
        getAllNotes();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!noteTitle) {
            alert(`Please provide a valid note title.`);
            return;
        }
        const newNote = {
            id: Date.now() + '',
            title: noteTitle,
        };

        fetch(`http://localhost:4000/notes`, {
            method: 'POST',
            body: JSON.stringify(newNote),
            headers: {
                'Content-type': 'application/json',
            },
        }).then(() => {
            getAllNotes();
            setNoteTitle('');
        });
    };

    return (
        <div className='App'>
            <NoteForm
                getAllNotes={getAllNotes}
                handleSubmit={handleSubmit}
                noteTitle={noteTitle}
                setNoteTitle={setNoteTitle}
                notes={notes}
                setNotes={setNotes}
                setEditMode={setEditMode}
                editMode={editMode}
                editAbleNote={editAbleNote}
            />
            <NotesList
                getAllNotes={getAllNotes}
                setNoteTitle={setNoteTitle}
                notes={notes}
                setNotes={setNotes}
                setEditMode={setEditMode}
                setEditAbleNote={setEditAbleNote}
                noteTitle={noteTitle}
            />
        </div>
    );
}

export default App;
