import GameData from "../models/gameData.js";

export const getGames = async (req, res) => {
    try {
        const games = await GameData.find();
        res.status(200).json(games);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addGame = async (req, res) =>{
    const body = req.body;
    
    const newGame = new GameData(body);

    try {
        await newGame.save();

        res.status(201).json(newGame);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}