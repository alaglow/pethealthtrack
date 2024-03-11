import mongoose from 'mongoose';

function connectToDb() {
    mongoose.connect('mongodb+srv://admin:12345admin@petapi.vvvlcrz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=PetAPI')
        .then(() => {
            console.log('Connected to MongoDB')
        }).catch((error) => {
            console.log(error)
        })
}

const loginSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        // },
        // animal:{
        //     type: String,
        //     enum: ["Pies", "Kot"],
        //     required: true,
        }
    }
);

connectToDb();
export const collection = mongoose.model('Login Panel', loginSchema);
