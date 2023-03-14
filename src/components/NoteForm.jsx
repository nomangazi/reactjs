import { useContext } from 'react';
import { NotesContext } from '../contexts/Notes';

const NoteForm = () => {
    const notesCtx = useContext(NotesContext);
    return (
        <div>
            <form
                onSubmit={(e) => {
                    notesCtx.editMode ? notesCtx.updateHandler(e) : notesCtx.handleSubmit(e);
                }}>
                <input
                    type='text'
                    value={notesCtx.noteTitle}
                    onChange={(e) => notesCtx.setNoteTitle(e.target.value)}
                />
                <button type='submit'>{notesCtx?.editMode ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
};

export default NoteForm;
