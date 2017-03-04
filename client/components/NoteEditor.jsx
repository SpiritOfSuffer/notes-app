import React from 'react';
import ReactDOM from 'react-dom';
import './NoteEditor.less';

const NoteEditor = React.createClass({
	getInitialState(){
				return{
					title: '',
					text: '',
					color: '#FFFFFF'
				};	
			},

	titleChange(e){
				this.setState({
					title: e.target.value	
				});	
			},

	textChange(e){
				this.setState({
					text: e.target.value	
				});	
			},		

	noteAdd(){
		const NewNote = {
			title: this.state.title,
			text: this.state.text,
			color: this.state.color
		};

		this.props.onNoteAdd(NewNote);
		this.setState({text: '', title: '', color: '#FFFFFF'});
	},

	render() {
        return (
            <div className='NoteEditor'>
                <input
                    type='text'
                    className='NoteEditor__title'
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={this.titleChange}
                />
                <textarea
                    placeholder='Enter note text'
                    rows={5}
                    className='NoteEditor__text'
                    value={this.state.text}
                    onChange={this.textChange}
                />
                <div className='NoteEditor__footer'>
                    <button
                        className='NoteEditor__button'
                        disabled={!this.state.text}
                        onClick={this.noteAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
});

export default NoteEditor;