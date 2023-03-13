import './App.css';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';

function App() {

    return (
        <div className='App'>
            <NoteForm />
            <NotesList />
        </div>
    );
}

export default App;
