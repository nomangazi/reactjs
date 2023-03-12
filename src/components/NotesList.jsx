import React from 'react';

const NotesList = (props) => {
    const editHandler = (noteId) => {
        console.log(noteId);
        const toBeEditedNotes = props.notes.find((item) => item.id === noteId);
        props.setEditMode(true);
        props.setEditAbleNote(toBeEditedNotes);
        props.setNoteTitle(toBeEditedNotes.title);
    };

    const deleteHandler = (noteId) => {
        fetch(`http://localhost:4000/notes/${noteId}`, {
            method: 'DELETE',
        }).then(() => {
            props.getAllNotes();
        });
    };

    return (
        <div className='notesList'>
            <ul>
                {props.notes.map((note) => (
                    <li key={note.id}>
                        {note.title}
                        &nbsp;
                        <button onClick={() => editHandler(note.id)}>Edit</button>
                        &nbsp;
                        <button onClick={() => deleteHandler(note.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesList;
