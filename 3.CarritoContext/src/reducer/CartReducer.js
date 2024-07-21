export const initialState = JSON.parse(window.localStorage.getItem("cart")) || []

const saveLocalStorage = state => {
    window.localStorage.setItem("cart", JSON.stringify(state))
}

export const reducer = (state, action) => {
    const {type: actionType, payload: actionPayload} = action

    switch (actionType) {
        case "ADD_TO_CART": {
            const {id} = actionPayload
            const productInCart = state.findIndex(item => item.id === id)

            if (productInCart >= 0) {
                const newState = [
                    ...state.slice(0, productInCart),
                    {...state[productInCart], quantity: state[productInCart].quantity + 1},
                    ...state.slice(productInCart + 1)
                ]            
                saveLocalStorage(newState)  
                return newState
            }

            const newState =[
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]
            saveLocalStorage(newState)
            return newState
        }

        case "REMOVE_FROM_CART": {
            const {id} = actionPayload
            const newState = state.filter(item => item.id !== id)
            saveLocalStorage(newState)
            return newState
        }

        case "CLEAR_CART": {
            saveLocalStorage([])
            return []
        }
    }

    return state
}