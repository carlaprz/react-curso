const boards = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_BOARD':

            return {
                ...boards,
                [action.id]: {
                    id: action.id,
                    name: action.name
                }
            };
        case 'REMOVE_BOARD':

            return state.filter((board) => {
                return board.id !== action.id;
            });
        default:
            return state;
    }
};

export default boards