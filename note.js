'use strict';

class Note {
    constructor(name, text){
        this.name =  name;
        this.text = text;
    }

    updateText(text){
       this.text = text;
    }

    updateName(name){
        this.name = name;
    }


}

module.exports = Note;