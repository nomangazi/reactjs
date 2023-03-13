import { useState, createContext } from 'react';

export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
    const [noteTitle, setNoteTitle] = useState('');
    const [notes, setNotes] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editAbleNote, setEditAbleNote] = useState(null);

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
    
    const editHandler = (noteId) => {
        console.log(noteId);
        const toBeEditedNotes = props.notes.find((item) => item.id === noteId);
        props.setEditMode(true);
        props.setEditAbleNote(toBeEditedNotes);
        props.setNoteTitle(toBeEditedNotes.title);
    };

    const updateHandler = (e) => {
        e.preventDefault();
        if (!props.noteTitle) {
            alert('Provide a valid note title.');
            return;
        }
        fetch(`http://localhost:4000/notes/${props.editAbleNote.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: props.noteTitle,
            }),
        }).then(() => {
            props.getAllNotes();
            props.setEditMode(false);
            props.setNoteTitle('');
        });
    };

    const deleteHandler = (noteId) => {
        fetch(`http://localhost:4000/notes/${noteId}`, {
            method: 'DELETE',
        }).then(() => {
            props.getAllNotes();
        });
    };
};

export default NotesProvider;
