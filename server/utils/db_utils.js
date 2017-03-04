import mongoose from "mongoose";
import '../models/Note';
//import config from '../../etc/config.json'

const Note = mongoose.model('Note');

export function makeConnection()
{
    mongoose.connect('mongodb://localhost:27017/notes')
}

export function getNotes()
{
    return Note.find();
}

export function createNote(data)
{
    const note = new Note(
    {
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return note.save();
}

export function deleteNote(id)
{
    return Note.findById(id).remove();
}