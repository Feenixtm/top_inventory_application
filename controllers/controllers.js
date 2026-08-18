import mockDatav2 from "../models/mockDatav2.js";

export const getInventory = (req, res) => {
    res.render("inventory", { data: mockDatav2 })
}

// -----------------------------------------------

export const getSlot = (req, res) => {
    const id = Number(req.params.id);
    
    res.render("edit-slot", { slotID: id });
}

// -----------------------------------------------

export const updateSlot = (req, res) => {
    const id = Number(req.params.id);

    const blockType = req.body.blockType;
    const amount = req.body.amount;

    // IF ITEM DOESNT EXIST ON THIS INDEX THEN PUSH IT TO THE ARRAY. OTHERWISE, EDIT THE PRE-EXISTING ONE
    // WIP (BELOW)

    const index = mockDatav2.findIndex(slot => slot.slotID === Number(id));
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
}

// -----------------------------------------------
 
export const deleteSlot = (req, res) => {
    const id = Number(req.params.id);

    const index = mockDatav2.findIndex(slot => slot.slotID === id)

    mockDatav2.splice(index, 1);

    res.redirect("/");
}

// -----------------------------------------------

