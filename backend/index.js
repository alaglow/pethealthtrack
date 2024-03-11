import dotenv from 'dotenv';

import express from "express";
import mongoose from 'mongoose';
import path from "path";
import bcrypt from "bcrypt";
import { collection } from './models/loginModel.js';
import { fileURLToPath } from 'url';
import { dogNames } from './models/dogModel.js';


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, 'backend', '.env');
dotenv.config({ path: envPath });
const app = express();
const PORT = 5030;
app.set('views', '/Users/alag/pethealthtrack/frontend/static');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
    res.render("login");
});

app.get('/signup', (req, res) => {
    res.render("signup");
});

app.post('/signup', async (req, res) => {
    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };

    const existingUser = await collection.findOne({ username: data.username })

    if (existingUser) {
        res.send("Nazwa uzytkownika juz istnieje")
        console.log("nie dziala")
    } else {
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRound);
        data.password = hashedPassword;

        const userdata = await collection.insertMany(data);
        res.status(200).json(userdata);
    }
});

app.post('/signup/page2')

app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ username: req.body.username });
        if (!check) {
            res.send("Nie znaleziono uzytkownika")
        }

        const isPasswordMatched = await bcrypt.compare(req.body.password, check.password)

        if(isPasswordMatched){
            res.render("home")
        } else {
            res.send("niepoprawne hasło")
        }

    } catch (error) {
        console.log(error)
    }
})

app.get('/breeds', (req, res) => {
    dogNames.find({})
        .then( data => {
            const breedNames = data.map(item => item.name);
            res.json(breedNames);})
        .catch (err => {
        res.status(500).json({ error: 'Internal Server Error' })})
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

