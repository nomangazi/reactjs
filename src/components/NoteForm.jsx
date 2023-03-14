const NoteForm = (props) => {
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

    return (
        <div>
            <form onSubmit={props.editMode ? updateHandler : props.handleSubmit}>
                <input
                    type='text'
                    value={props.noteTitle}
                    onChange={(e) => props.setNoteTitle(e.target.value)}
                />
                <button type='submit'>{props.editMode ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
};

export default NoteForm;
