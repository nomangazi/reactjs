import { useContext } from 'react';
import { NotesContext } from '../contexts/Notes';

const NotesList = () => {
    const notesData = useContext(NotesContext);
    return (
        <div className='notesList'>
            <ul>
                {notesData?.notes.map((note) => (
                    <li key={note.id}>
                        {note.title}
                        &nbsp;
                        <button onClick={() => notesData?.editHandler(note.id)}>Edit</button>
                        &nbsp;
                        <button onClick={() => notesData?.deleteHandler(note.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesList;
