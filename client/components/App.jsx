import React from 'react';
import ReactDOM from 'react-dom';
import NoteEditor from './NoteEditor.jsx';
import NoteList from './NoteList.jsx';
import NotesStore from '../stores/NotesStore';
import NotesActions from '../actions/NotesActions';
import './App.less';

function getStateFromFlux(){
	return{
		isLoading: NotesStore.isLoading(),
		notes: NotesStore.getNotes()
	};
}

const App = React.createClass({
	getInitialState(){
		return getStateFromFlux();
	},

	componentWillMount(){
		NotesActions.loadNotes();
	},

	componentDidMount(){
		NotesStore.addChangeListener(this._onChange);
	},

	componentWillUnmount(){
		NotesStore.removeChangeListener(this._onChange);
	},

	noteAdd(data){
		NotesActions.createNote(data);
	},

	noteDelete(note){
		NotesActions.deleteNote(note.id);
	},
	render() {
		return (
            <div className='app'>
                <h2 className='app_header'>NotesApp</h2>
                <NoteEditor onNoteAdd={this.noteAdd} />
                <NoteList notes={this.state.notes} onNoteDelete={this.noteDelete} />
            </div>
        );
    }
});

export default App;