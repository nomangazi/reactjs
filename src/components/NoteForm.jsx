const NoteForm = (props) => {

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
