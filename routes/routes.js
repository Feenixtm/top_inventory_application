import express from "express";
const router = express.Router();

import mockData from "../models/mockData.js";
import mockDatav2 from "../models/mockDatav2.js";

import * as controller from "../controllers/controllers.js";

router.get("/controller-test", controller.testMiddleware);

router.get("/", (req, res) => {
    res.render("inventory", { data: mockDatav2 });
})

router.get("/edit-slot/:id", (req, res) => {
    const id = Number(req.params.id);
    
    res.render("edit-slot", { slotID: id });
})
// ----------------------------------------------

router.post("/edit-slot/:id", (req, res) => {
    const id = Number(req.params.id);

    const blockType = req.body.blockType;
    const amount = req.body.amount;

    // IF ITEM DOESNT EXIST ON THIS INDEX THEN PUSH IT TO THE ARRAY. OTHERWISE, EDIT THE PRE-EXISTING ONE
    // WIP (BELOW)

    const index = mockDatav2.findIndex(slot => slot.id === Number(id));
    console.log(index);

    if (index === -1) {
        const newItem = {
            slotID: id,
            itemName: blockType,
            amount: amount,
        }

        console.log(newItem);

        mockDatav2.push(newItem)
    } else {
        mockDatav2[index] = {
            slotID: id,
            itemName: blockType,
            amount: amount,
        }
    }

    res.redirect("/");
})

router.post("/delete-slot-item/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = mockDatav2.findIndex(slot => slot.slotID === id)

    mockDatav2.splice(index, 1);

    res.redirect("/");
})

export default router;

