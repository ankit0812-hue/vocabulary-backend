const Word = require('../models/word');

exports.searchWord = async (req,res) =>{
    
    //Retrieving the word to be searched from the database passed as a query string
    const word = req.query.word;
    try {

        //Finding the word from the database and convert into simple JSON Objects
        const result = await Word.find({word: word}).lean();

        // If word exists we return the response to the client side
        if(result.length > 0) {
            return res.status(200).json({
                error: false,
                length: result.length,
                result
            });
        }

        // If word does not exist we send an appropriate error message
        else {
            return res.status(200).json({
                error: true,
                status: "No such word found"
            });
        }
    }

    //catching any errors
    catch(error) {
        return res.status(500).send(error.message);
    }
}