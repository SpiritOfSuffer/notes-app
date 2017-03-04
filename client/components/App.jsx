import React from 'react';
import ReactDOM from 'react-dom';
import NoteEditor from './NoteEditor.jsx';
import NoteList from './NoteList.jsx';

const App = React.createClass({
	noteAdd(data){
		console.log(data);
	},
	render() {
		return (
			<div className="app">
				<h2 class="app_header">NotesApp</h2>
				<NoteEditor onNoteAdd={this.noteAdd} />
				<NoteList />
			</div>
		);
	}
});

export default App;