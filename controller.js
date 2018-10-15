'use strict';

const List = require('./list');
const Note = require('./note');

class Controller {
    constructor(){
        this.list = new List;
    }

    addNote(name, text){
        var newNote = this.newNote(name, text);
        this.list.noteList.push(newNote)    
    }

    newNote(name, text){
        let note = new Note(name, text);
        return note;
    }
}

module.exports = Controller; 