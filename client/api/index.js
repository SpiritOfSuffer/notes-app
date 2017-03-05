import axios from 'axios';

export default {
	listNotes(){
		return axios.get('http://localhost:8080/notes');
	},

	createNote(data){
		return axios.post('http://localhost:8080/notes', data);
	},

	deleteNote(noteID){
		return axios.delete('http://localhost:8080/notes/${noteID}');
	}
}