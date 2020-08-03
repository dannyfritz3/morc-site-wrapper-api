var weatherAdapter = require("../adapters/WeatherAdapter");
var locationService = require("./LocationService");

const WeatherService = {
    "getWeatherDataByLocationName": async (locationName) => {
        const locationCoordinates = await locationService.getLocationCoordinates(req.params.location);
        const forecastedWeatherData = await weatherAdapter.getForecastedWeatherDataByCoordinates(locationCoordinates.data[0]);
        const liveWeatherData = await weatherAdapter.getLiveWeatherDataByCoordinates(locationCoordinates.data[0]);

        return {
            "forecastedWeatherData": forecastedWeatherData.data.slice(0, 5),
            "liveWeatherData": liveWeatherData.data
        }
    },

    "getWeatherDataByLocationCoordinates": async (locationCoordinates) => {
        return {
            "forecastedWeatherData": await weatherAdapter.getForecastedWeatherDataByCoordinates(locationCoordinates),
            "liveWeatherData": await weatherAdapter.getLiveWeatherDataByCoordinates(locationCoordinates)
        }
    }
};

module.exports = WeatherService;