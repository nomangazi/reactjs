import './App.css';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import NotesProvider from './contexts/Notes';

function App() {

    return (
        <NotesProvider>
            <div className='App'>
                <NoteForm />
                <NotesList />
            </div>
        </NotesProvider>
    );
}

export default App;
