import WeatherForecast from "./WeatherForecast";

describe("WeatherForecast", () => {
    let weatherForecast: WeatherForecast;

    beforeEach(() => {
        weatherForecast = new WeatherForecast();
    })

    describe('setWeather', () => {
        it('should add weather condition when the date does not exist yet', () => {
            const today = new Date();
            weatherForecast.setWeather(today, 'Sunny');

            expect(weatherForecast.getWeather(today)).toBe('Sunny');
        })

        it('should update weather condition when the date already exists', () => {
            const today = new Date();
            weatherForecast.setWeather(today, 'Sunny');
            weatherForecast.setWeather(today, 'Cloudy');

            expect(weatherForecast.getWeather(today)).toBe('Cloudy');
        })
    })

    describe('getWeather', () => {
        it('should get the weather condition for the date', () => {
            const today = new Date();
            weatherForecast.setWeather(today, 'Sunny');
            const tomorrow = new Date(today.getTime() + 86400000);
            weatherForecast.setWeather(tomorrow, 'Snowy');

            expect(weatherForecast.getWeather(today)).toBe('Sunny');
            expect(weatherForecast.getWeather(tomorrow)).toBe('Snowy');
        })

        it('should get the weather condition for the date', () => {
            expect(weatherForecast.getWeather(new Date())).toBeUndefined();
        })
    })

    describe('predictWeather', () => {
        it('should set a random weather condition for a specific date', () => {
            const today = new Date();
            weatherForecast.predictWeather(today);

            expect(weatherForecast.getWeather(today)).toBeDefined();
        })
    })
})