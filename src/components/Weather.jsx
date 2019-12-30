import React from 'react'

export default function Weather({ weather }) {
    return (
        <>
            {weather.map(item => {
                let getIcon = () => {
                    let icon = item.weather[0].icon;
                    let url_icon = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                    return url_icon;
                }
                return (
                    <div key={item.id} className="row align-items-center justify-content-center">
                        <div className="card bg-warning col-md mb-3 text-center" style={{ maxWidth: "22rem", marginTop: '7rem' }}>
                            <div className="card-header">
                                <h2>
                                    Temp: {
                                        item.cod === "404"
                                            ? 'Not Found!'
                                            : Math.floor(item.main.temp)
                                    }
                                    {
                                        item.cod === "404"
                                            ? null
                                            : <span>&deg;</span>
                                    }
                                </h2>
                                <img src={getIcon()} alt="icon" />
                                <h5>{
                                    item.cod === "404"
                                        ? 'Not Found!'
                                        : item.name
                                }
                                </h5>
                            </div>
                            <div className="card-body">

                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Details: {
                                        item.cod === "404"
                                            ? 'Not Found!'
                                            : item.weather[0].main + ' - ' + item.weather[0].description
                                    }</li>
                                    <li className="list-group-item">
                                        {
                                            item.cod === "404"
                                                ? 'Not Found!'
                                                : `Wind speed: ${item.wind.speed}`
                                        }
                                    </li>
                                    <li className="list-group-item">
                                        {
                                            item.cod === "404"
                                                ? 'Not Found!'
                                                : `Wind deg: ${item.wind.deg}`
                                        }
                                    </li>

                                    <li className="list-group-item">
                                        {
                                            item.cod === "404"
                                                ? "Not Found!"
                                                : `Temp Min: ${item.main.temp_min}`
                                        }
                                    </li>
                                    <li className="list-group-item">
                                        {
                                            item.cod === "404"
                                                ? "Not Found!"
                                                : `Temp Max: ${item.main.temp_max}`
                                        }
                                    </li>

                                    <li className="list-group-item">
                                        Humidity: {
                                            item.cod === "404"
                                                ? "Not Found!"
                                                : item.main.humidity
                                        }</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )

}
