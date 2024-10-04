 
import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js'

/** get all questions */
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

/** insert all questinos */
// export async function insertQuestions(req, res){
//     try {
//         Questions.insertMany({ questions, answers }, function(err, data){
//             res.json({ msg: "Data Saved Successfully...!"})
//         })
//     } catch (error) {
//         res.json({ error })
//     }
// }

/** insert all questions */
export async function insertQuestions(req, res){
    try {
        await Questions.insertMany({ questions, answers });
        res.json({ msg: "Data Saved Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

/** Delete all Questions */
export async function dropQuestions(req, res){
   try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}

/** get all result */
export async function getResult(req, res) {
    try {
        const results = await Results.find(); // Fetching results from the database
        res.status(200).json(results);        // Sending a success response with status code 200
    } catch (error) {
        console.error("Error fetching results:", error);  // Logging error for debugging
        res.status(500).json({ message: "Error fetching results", error });  // Sending error response with status code 500
    }
}

/** post all result */
// export async function storeResult(req, res){
//    try {
//         const { username, result, attempts, points, achived } = req.body;
//         if(!username && !result) throw new Error('Data Not Provided...!');

//         Results.create({ username, result, attempts, points, achived }, function(err, data){
//             res.json({ msg : "Result Saved Successfully...!"})
//         })

//    } catch (error) {
//         res.json({error})
//    }
// }

/** post all result */
export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username || !result) throw new Error('Data Not Provided...!');

        const newResult = await Results.create({ username, result, attempts, points, achived });
        res.json({ msg: "Result Saved Successfully...!", data: newResult })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

/** delete all result */
export async function dropResult(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}