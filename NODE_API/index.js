import express from "express";
import mongoose from 'mongoose';
import { Notes } from './models/productModel.js';


const app = express()
const PORT = 5001;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Start')
})

app.get('/notes', async (req, res) => {
    try {
        const note = await Notes.find({});
        res.status(200).json(note)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// app.get('/notes/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const note = await Notes.findById(id);
//         res.status(200).json(note);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

app.post('/notes', async (req, res) => {
    try {
        const { content } = req.body;
        const note = await Notes.create({ content })
        res.status(201).json(note);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

app.put('/notes/:id', async (req, res) => {
    try {
        const { content } = req.body;
        // const { id } = req.params;

        const updateNotes = await Notes.findByIdAndUpdate({content});

        res.status(200).json(updateNotes);

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})


mongoose.connect()
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))

        console.log('Connected to MongoDB')
    }).catch(() => {
        console.log(error)
    }) 