'use strict';

const alexa = require('alexa-app');
const app = new alexa.app("note");
const Controller = require('./controller');
const controller = new Controller; 

app.launch(function(req, res){
    res.say("hi, you've succesfully opened note");

})

app.intent("test-intent", {
    "utterances": ["say test"]
    },
    function(req, res) {
        res.say("test response");
    }
);

exports.handler = app.lambda();