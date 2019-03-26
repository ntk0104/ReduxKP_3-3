export function startFetchData(){
    return {
        type: 'START_FETCH'
    }
}

export function fetchDataSuccessfully(cityName, temp){
    return {
        type: 'FETCH_SUCCESSFULLY',
        cityName,
        temp
    }
}

export function fetchError(){
    return {
        type: 'FETCH_ERROR'
    }
}