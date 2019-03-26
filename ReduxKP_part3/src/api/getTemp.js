
const URL = 'https://openweathermap.org/data/2.5/weather?appid=b6907d289e10d714a6e88b30761fae22&q='

function getTemp(cityName) {
    return new Promise((resolve, reject) => {
        fetch(URL + cityName)
            .then(res => {
                console.log("res")
                console.log(res)
                
                // .json work but JSON.parse do not 
                // Body.json() is asynchronous and returns a Promise object that resolves to a JavaScript object. 
                // JSON.parse() is synchronous can parse a string and change the resulting returned JavaScript object.
                return res.json()
            })
            .then(resJSON => {
                console.log("resJSON")
                console.log(resJSON)
                let temp = resJSON.main.temp
                console.log(temp)
                resolve(temp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export default getTemp