const initialState = {
    menu: [],
    loading: true,
    items: []
}

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            }
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            }
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            }
        case 'ITEM_ADD_TO_CART': {
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                ...item
            }
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            }
        }
        case 'DELETE_FROM_CART': {
            const id = action.payload;
            const idx = state.items.findIndex(item => item.id === id);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, idx),
                    ...state.items.slice(idx + 1)
                ]
            }

        }
        default:
            return state;
    }
}

export default reducer;
