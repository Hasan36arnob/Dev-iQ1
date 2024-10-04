// import { Router } from "express";
// const router = Router();


// import * as controller from '../controllers/controller.js'




// router.route('/questions')
//   .get(controller.getQuestions)
//   .post(controller.insertQuestions)
//   .delete(controller.dropQuestions)

// router.route('/result')
//    .get(controller.getResult)
//    .post(controller.storeResult)
//    .delete(controller.dropResult)


// export default router


import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from '../controllers/controller.js';

/** Questions Routes API */

router.route('/questions')
        .get(controller.getQuestions) /** GET Request */
        .post(controller.insertQuestions) /** POST Request */
        .delete(controller.dropQuestions) /** DELETE Request */

router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

export default router;