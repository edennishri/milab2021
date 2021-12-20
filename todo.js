const express = require('express');
const bodyParser = require('body-parser');

const fs = require('fs');
let app = express();

//home page
app.get('/', (req, res) => {
    res.send('Hello and welcome to my basic To-Do app!' +
        ' if you want to see the tasks, go to /tasks.' +
        ' if you want to add a new task, go to /tasks/add and give a relevant id and task ' +
        ' if you want to remove a task, go to tasks/remove and give a relevant id. ');

});

// handling file functions
function readJsonFile() {
    let jsonFile = fs.readFileSync('tasks.json', 'utf-8', (err) => {
        if (err){
            console.log(err);
            throw err;
        }
    });
    return jsonFile;
}
function writeToJson(file){
    let jsonString = JSON.stringify(file, null, 4);
    fs.writeFile('tasks.json', jsonString, (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    });
}

// show all tasks
app.get('/tasks', (req, res) => {
    res.send(readJsonFile());

});

// add task
app.get('/tasks/add',(req, res) => {

    let tasks = JSON.parse(readJsonFile());
    let id =  parseInt(req.query.id) || "NaN";
    let task = req.query.task || "Null";

    //validate the ID
    if(isNaN(id)){
        res.send("invalid ID number");
    } else {
        //validate that the ID isn't occupied and adds the task to tasks
        if(!tasks.hasOwnProperty(id)){
            tasks[id] = task;
            writeToJson(tasks);
            res.send("Added new task \n id: " + id + "\n task: " + task);
        // if ID is occupied
        } else {
            res.send("This ID is occupied, please choose another one");
        }
    }
});

//remove task
app.get('/tasks/remove',(req, res) => {

    let tasks = JSON.parse(readJsonFile());
    let id = parseInt(req.query.id);
    //validate the ID
    if(isNaN(id)){
        res.send("invalid ID number");
    //removes the task
    } else {
        if(tasks.hasOwnProperty(id)){
            delete tasks[id];
            res.send("Delete the task with id: " + id + " from JSON file");
            writeToJson(tasks);
        } else {
            res.send("The ID doesn't exists");
        }
    }
});



app.listen(3000,() => {
    console.log('Listening on port 3000!')});