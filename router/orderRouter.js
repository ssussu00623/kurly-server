import express from "express";
import * as controller from '../controller/orderController.js'

const router = express.Router();


router
    .post('/all', controller.getorderlist)
    .post('/add', controller.add);


export default router;
