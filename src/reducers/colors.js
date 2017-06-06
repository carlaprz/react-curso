const colors = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COLOR':

            return {
                ...colors,
                  [action.id]:
                      {
                          id: action.id,
                          name: action.name,
                          value: action.value
                      }
            };
        case 'REMOVE_COLOR':

            return state.filter((color) => {
                return color.id !== action.id;
            });
        case 'UPDATE_COLOR':

            return state.map((color) => {
                if (color.id !== action.id) {
                    return color;
                }

                return { ...color,
                        id: action.id,
                        name: action.name,
                        value: action.value
                };
            });
        default:

            return state;
    }
};

export default colors