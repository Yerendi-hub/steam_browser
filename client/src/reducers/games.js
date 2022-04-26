export default (games = [], action) => {
    switch(games.type)
    {
        case 'FETCH_ALL':
            return action.payload;
        default:
            return games;
    }
}