import env_config from "../config/environment";
import url_config from "../config/url";

export const getLocalWeather = async () => {
    const base_url: string = url_config.weather_api;
    const key: string = env_config.WEATHER_API_KEY;
    const url: string = `${base_url}current.json?key=${key}&q=Tuxtepec&aqi=no&lang=es`;

    const response = await fetch(url);

    return await response.json();
};
