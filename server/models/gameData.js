import mongoose from 'mongoose';

const gameSchema = mongoose.Schema({
    steamId: Number,
    comment: String,
    addedAt : {
        type: Date,
        default: new Date()
    }
});

const GameData = mongoose.model('GameData', gameSchema);

export default GameData;