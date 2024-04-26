import { useEffect, useState } from "react"
import { getLocalWeather } from "../../../api/weatherapi"
import { Current } from "./Interfaces/IWeather" 

const Weather = () => {
    const [localWeather, setLocalWeather] = useState<Current | null>(null)
    useEffect(() => {
        const getWeather = async () => {
            const { current } = await getLocalWeather()
            console.log(current)
            setLocalWeather(current)
        }
        getWeather()
    }, [])

    return (
        <>
            {!localWeather ? (
                <h3>
                    Clima no disponible
                </h3>
            ) : (
                <div className="flex w-10 col-offset-1 md:w-6 md:col-offset-3 align-items-center justify-content-between text-white mr-3">
                    <div className="flex flex-column align-items-center">
                        <div className="flex flex-row align-items-center text-start">
                            <img src={`http://${localWeather.condition.icon}`} />
                            <b>{localWeather.condition.text}</b>
                        </div>
                    </div>
                    <div className="flex flex-column">
                        <div className="flex">
                            <i className="bi bi-thermometer-half"></i>
                            &nbsp;
                            {localWeather.temp_c}°C
                        </div>
                        <div className="flex">
                            <i className="bi bi-wind"></i>
                            &nbsp;
                            {localWeather.wind_kph} Km/h
                        </div>
                    </div>
                    <div className="flex flex-column">
                        <div className="flex">
                            <i className="bi bi-droplet-half"></i>
                            &nbsp;
                            {localWeather.humidity}%
                        </div>
                        <div className="flex align-items-center">
                            <i className="bi bi-cloud"></i>
                            &nbsp;
                            {localWeather.cloud}%
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Weather