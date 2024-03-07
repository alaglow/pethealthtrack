import { dogNames } from './models/dogModel.js';

async function run() {
    await dogNames.deleteMany({});
    console.log("Cleared breeds collection");
    
    await dogNames.create({"name": "Kundelek"});
    
    let breeds = await fetch('https://api.thedogapi.com/v1/breeds')
        .then(response => response.json());

    console.log("Fetched " + breeds.length + " breeds");

    for (const breed of breeds) {
        await dogNames.create({"name": breed.name});
    }
    console.log("Inserted breeds");

    process.exit();
}

run();
