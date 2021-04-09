const express = require('express');
const { getWords } = require('../controllers/getWords');
const { addNewWord } = require('../controllers/addNewWord');
const { searchWord } = require('../controllers/searchWord');
const router = express.Router();

// Router for handling get request to fetch all words
router.get('/',getWords);

// Router for handling post request to add a new word
router.post('/add',addNewWord);

// Router for handling get requests to fetch a particular word
router.get('/search',searchWord);

module.exports = router;