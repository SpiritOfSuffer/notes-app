import React from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'react-masonry-component';
import Note from './Note.jsx';
import './NoteList.less'

const NoteList = React.createClass({
	render() {
		const MasonryOptions = {
			itemSelector: '.Note',
			columnWidth: 250,
			gutter: 10,
			isFitWidth: true
		};

		return(
			<Masonry
				className='NoteList'
				options={MasonryOptions}
			>
			{
				this.props.notes.map(note =>
					<Note
						key={note.id}
						title={note.title}
						onDelete={this.props.onDelete.bind(null, note)}
						color={note.color}
					>
						{note.text}
					</Note>
				)
			}
			</Masonry>
		);
	}
});

export default NoteList;