const request = require("request")

// const forecast = (location, callback) => {
//     const url = "https:api.weatherstack.com/current?access_key=b36cbe5599136c2b2625a0c245c7e21d&query=" + encodeURIComponent(location) +"&units=f"

//     request ({url: url, json: true}, (error, response) => {
//         if (error) {
//             callback("Unable to connect to location services", undefined)
//         } else {
//             callback(undefined, {
//                 degrees: response.body.current.temperature,
//                 sky: response.body.current.weather_descriptions

//             })
//         }
//     })

//     }


 const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=b36cbe5599136c2b2625a0c245c7e21d&query=" + latitude +", " + longitude +"&units=f"
    
    request({url, json: true}, (error, {body}) => {
        if (error){
            callback("Cant connect to weather service", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, console.log(body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + "degrees out. Is feels like " + body.current.feelslike + " degrees out. "))
        }
    })


}   




    module.exports = forecast