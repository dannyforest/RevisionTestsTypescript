type WeatherCondition = 'Sunny' | 'Rainy' | 'Cloudy' | 'Windy' | 'Snowy';
type WeatherEntry = { date: string, condition: WeatherCondition };

class WeatherForecast {
    private forecasts: WeatherEntry[] = [];

    /**
     * Sets the weather condition for a specific date.
     * If a condition is already set for the date, it updates the condition.
     * @param date The date for which to set the weather condition.
     * @param condition The weather condition to set.
     */
    setWeather(date: Date, condition: WeatherCondition): void {
        const formattedDate = this.formatDate(date);
        const existingIndex = this.forecasts.findIndex(entry => entry.date === formattedDate);
        if (existingIndex > -1) {
            this.forecasts[existingIndex].condition = condition;
        } else {
            this.forecasts.push({ date: formattedDate, condition });
        }
    }

    /**
     * Retrieves the weather condition set for a specific date.
     * @param date The date for which to retrieve the weather condition.
     * @returns The weather condition for the specified date, or undefined if not set.
     */
    getWeather(date: Date): WeatherCondition | undefined {
        const formattedDate = this.formatDate(date);
        const entry = this.forecasts.find(entry => entry.date === formattedDate);
        return entry?.condition;
    }

    /**
     * Predicts and sets a random weather condition for a specific date.
     * @param date The date for which to predict the weather.
     * @returns The randomly predicted weather condition.
     */
    predictWeather(date: Date): WeatherCondition {
        const randomCondition = this.getRandomCondition();
        this.setWeather(date, randomCondition);
        return randomCondition;
    }

    private formatDate(date: Date): string {
        return date.toISOString().split('T')[0];
    }

    private getRandomCondition(): WeatherCondition {
        const conditions: WeatherCondition[] = ['Sunny', 'Rainy', 'Cloudy', 'Windy', 'Snowy'];
        return conditions[Math.floor(Math.random() * conditions.length)];
    }
}

export default WeatherForecast;