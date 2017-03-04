import express from "express";
import bodyParser from "body-parser";
import * as db from "./utils/db_utils.js";
//import {serverPort} from "../etc/config.json"

const app = express(); 
const server = app.listen(8080, () =>  
{
    console.log('Server is running on port 8080!');
});

db.makeConnection();

app.use(bodyParser.json());

app.get('/', (req, res) =>
{
    res.send('App is working!')
});

app.get('/notes', (req, res) =>
{
    db.getNotes().then(data => 
    {
        res.send(data);
    });
});

app.post('/notes', (req, res) =>
{
    db.createNote(req.body).then(data =>
    {
        res.send(data);
    });
});

app.get('/notes/:id', (req, res) =>
{
    db.deleteNote(req.params.id).then(data =>
    {
        res.send(data);
    });
});