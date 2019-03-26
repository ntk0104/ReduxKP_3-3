const defaultState = {
    cityName: null,
    temp: null,
    isLoading: false,
    error: false
}


const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'START_FETCH':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCH_SUCCESSFULLY':
            return {
                cityName: action.cityName,
                isLoading: false,
                temp: action.temp,
                error: false
            }
        case 'FETCH_ERROR':
            return {
                isLoading: false,
                error: true,
                ...state
            }
        default:
            return state
    }
}

export default reducer