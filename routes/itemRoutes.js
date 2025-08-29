import express from 'express'

import Item from '../models/Item.js'
const router = express.Router()
//create
router.post('/', async (req, res) => {
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save()
        res.status(201).json(savedItem)
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
})
//read all
router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
        if (!item) return res.status(404).json({ error: err.message })
        res.json(item)
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}
)
//update
router.put("/:id", async (req, res) => {
    try {
        const updatedItem = await
            Item.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            })
        if (!updatedItem) return res.status(404).json({ error: 'Item not found' })
        res.json(updatedItem);
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
})
//delete
router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ error: 'item not found' })
        res.json({ message: 'item deleted successfully' });
        
    }
    catch (err) {
        res.status(500).json({error:err.message})
    }
})
export default router