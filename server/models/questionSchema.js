// import mongoose from "mongoose";
// import { answers } from "../../client/src/database/Data";
// const {Schema} = mongoose;

// const questionModel = new Schema({
//     questions :  {type : Array, default: []},
//      answers : {type : Array , default :[]},
//      createdAt : {type : Date , default : Date.now}
// });


// export default mongoose.model('Question', questionModel)
// import mongoose from "mongoose";
// const { Schema } = mongoose;

// /** question model */
// const questionModel = new Schema({
//     questions: { type : Array, default: []}, // create question with [] default value
//     answers : { type : Array, default: []},
//     createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.model('Question', questionModel);

import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
    questions: { type : Array, default: []}, // create question with [] default value
    answers : { type : Array, default: []},
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Question', questionModel);