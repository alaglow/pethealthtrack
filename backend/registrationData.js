import { registrationPanel } from './models/loginModel.js';

async function getRegistrationData() {
 
    await registrationPanel.create({});
    
    // let breeds = await fetch('https://api.thedogapi.com/v1/breeds')
    //     .then(response => response.json());

    // console.log("Fetched " + breeds.length + " breeds");

    // for (const breed of breeds) {
    //     await registrationPanel.create({"name": breed.name});
    // }
    // console.log("Inserted breeds");

    // process.exit();
}

getRegistrationData();
