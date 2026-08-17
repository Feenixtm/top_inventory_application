import express from "express";
const router = express.Router();

import mockData from "../models/mockData.js";

router.get("/", (req, res) => {
    res.render("inventory", { data: mockData });
})

router.get("/edit-slot/:id", (req, res) => {
    const slotID = req.params.id;
    
    res.render("edit-slot", { slotID: slotID });
})
// ----------------------------------------------

router.post("/edit-slot/:id", (req, res) => {
    const slotID = req.params.id;

    const blockType = req.body.blockType;
    const amount = req.body.amount;

    mockData[(slotID - 1)] = {
        slotID: slotID,
        itemName: blockType,
        amount: amount,
    }

    res.redirect("/");
})

export default router;

