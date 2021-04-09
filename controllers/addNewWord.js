const axios = require('axios');
const Word = require('../models/word');

//Function for adding a new word to the database
exports.addNewWord = async (req,res) =>{

    //Retrieving the word to be added from the request body
    const word = req.body.word;
    try {

        //Sending a get request to the oxford api to fetch the word
        const request = await axios.get(`https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${word}?fields=etymologies,definitions,examples&strictMatch=true`,{
            headers : {
                "Content-type" : "application/json",
                app_id: process.env.APP_ID,
                app_key: process.env.APP_KEY 
            }
        });

        //Parsing response body into a JSON Object
        const response = request.data;
        
        //Creating a new entry to be stored in the database
        const newEntry = await Word.create({
            word,
            description: response.results[0].lexicalEntries
        });
        
        //Sending response back to the client
        return res.status(200).json({
            error: false,
            words : newEntry
        });
    }

    //catching any errors
    catch(error) {
        return res.status(500).send(error.message);
    }
}