import { useEffect, useState, createContext } from 'react';

export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
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

    const editHandler = (noteId) => {
        console.log(noteId);
        const toBeEditedNotes = notes.find((item) => item.id === noteId);
        setEditMode(true);
        setEditAbleNote(toBeEditedNotes);
        setNoteTitle(toBeEditedNotes.title);
    };

    const updateHandler = (e) => {
        e.preventDefault();
        if (!noteTitle) {
            alert('Provide a valid note title.');
            return;
        }
        fetch(`http://localhost:4000/notes/${editAbleNote.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: noteTitle,
            }),
        }).then(() => {
            getAllNotes();
            setEditMode(false);
            setNoteTitle('');
        });
    };

    const deleteHandler = (noteId) => {
        fetch(`http://localhost:4000/notes/${noteId}`, {
            method: 'DELETE',
        }).then(() => {
            getAllNotes();
        });
    };

    const NoteCtx = {
        noteTitle,
        setNoteTitle,
        notes,
        setNotes,
        editMode,
        setEditMode,
        editAbleNote,
        setEditAbleNote,
        handleSubmit,
        editHandler,
        updateHandler,
        deleteHandler,
        getAllNotes,
    };
    return <NotesContext.Provider value={NoteCtx}>{children}</NotesContext.Provider>;
};

export default NotesProvider;
