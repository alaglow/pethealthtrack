import mongoose from 'mongoose';

const noteSchema = mongoose.Schema(
    {
        content:{
            type: String,
            required: [true, "Dodaj notatkę"]
        },
        date:{
            type: Date,
            default: Date.now
        }
    }
);

export const Notes = mongoose.model('Note', noteSchema);