const express = require('express');
const router = express.Router();
const mongoose = require(',/,,/modules/mongo.js');

const Schema = mongoose.Schema;

const todoSchema = new Schema ({
    task: {type: String, required: true},
});

const Todo = mongoose.model('Todo', todoSchema);

router.get('/', (req, res) => {
    Todo.find({}).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error message for todo GET: ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;