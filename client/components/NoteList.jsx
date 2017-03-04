import React from 'react';
import ReactDOM from 'react-dom';

const NoteList = React.createClass({
	getInitialState(){
				return{
					title: "",
					text: "",
					color: '#FFFFFF'
				};	
			},
	render() {


		return <h1>NoteList</h1>;
	}
});

export default NoteList;