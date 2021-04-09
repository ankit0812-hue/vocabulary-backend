const Word = require('../models/word');

// Function for retrieving all words from the DataBase
exports.getWords = async (req,res) =>{
    try {
        
        // Query documents from the collection and convert them into JSON objects
        const words = await Word.find().lean();

        // Sending the response back to the client side
        return res.status(200).json({
            error: false,
            length: words.length,
            words
        });

    }
    // Ctching any error
    catch(error) {
        return res.status(500).send(error.message);
    }
}