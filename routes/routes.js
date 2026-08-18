import express from "express";
const router = express.Router();

import mockData from "../models/mockData.js";
import mockDatav2 from "../models/mockDatav2.js";

import * as controller from "../controllers/controllers.js";

router.get("/", controller.getInventory);

router.get("/edit-slot/:id", controller.getSlot);

router.post("/edit-slot/:id", controller.updateSlot);

router.post("/delete-slot-item/:id", controller.deleteSlot);

export default router;

