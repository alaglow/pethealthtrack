import mongoose from 'mongoose';

function connectToDb() {
    mongoose.connect()
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
