import mongoose from 'mongoose';

function connectToDb() {
    mongoose.connect('mongodb+srv://admin:12345admin@petapi.vvvlcrz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=PetAPI')
        .then(() => {
            console.log('Connected to MongoDB')
        }).catch((error) => {
            console.log(error)
        })
}

const dogSchema = mongoose.Schema(
    {
        name:{
            type: String,
        }
    }
);

connectToDb();
export const dogNames = mongoose.model('DogNames', dogSchema);
