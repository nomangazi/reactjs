const NoteForm = (props) => {
    const createHandler = (e) => {
        e.preventDefault();
        if (!props.noteTitle) {
            alert(`Please provide a valid note title.`);
            return;
        }
        const newNote = {
            id: Date.now() + '',
            title: props.noteTitle,
        };

        props.setNotes([newNote, ...props.notes]);
        props.setNoteTitle('');
    };


    const updateHandler = (e) => {
        e.preventDefault()
        if(!props.noteTitle){
            alert("Provide a valid note title.")
            return
        }

        const newNotes = props.notes.map(item =>{
            if(item.id === props.editAbleNote.id){
                item.title = props.noteTitle
            }
            return item
        })
        props.setNotes(newNotes)
        props.setEditMode(false)
        props.setEditAbleNote(null)
        props.setNoteTitle('')
    }

    return (
        <div>
            <form onSubmit={(e) => props.editMode ? updateHandler(e) : createHandler(e)}>
                <input
                    type='text'
                    value={props.noteTitle}
                    onChange={(e) => props.setNoteTitle(e.target.value)}
                />
                <button type='submit'>{props.editMode ? "Update" : "Add"}</button>
            </form>

        </div>
    );
};

export default NoteForm;
