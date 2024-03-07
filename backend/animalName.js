
import express from "express";
import mongoose from 'mongoose';
import { dogNames } from './models/dogModel.js';


const app = express()
const PORT = 5030;

app.use(express.json())

app.get('/save-dog', async (req, res) => {
    try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds');
        const data = await response.json();

        const dogNamesArray = [];
        for (const breed of data) {
            const dogNameDataBase = { name: breed.name };
            await dogNames.create(dogNameDataBase);
            dogNamesArray.push(dogNameDataBase);
        }
        res.status(200).json(dogNamesArray)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    };
});
