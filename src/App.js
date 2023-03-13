import React, { useState, useEffect } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';

function App() {

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
