import React from 'react';

const NotesList = (props) => {

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
