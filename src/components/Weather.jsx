import React from 'react'

export default function Weather({ weather }) {
    return (
        <>
            {weather.map(item => {
                return (
                    <div key={item.id} className="row align-items-center justify-content-center">
                        <div className="card bg-warning col-md mb-3 text-center" style={{ maxWidth: "18rem", marginTop: '13rem' }}>
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
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    City: {
                                        item.cod === "404"
                                            ? 'Not Found!'
                                            : item.name
                                    }
                                </h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        Country: {
                                            item.cod === "404"
                                                ? "Not Found!"
                                                : item.sys.country
                                        }</li>
                                    <li className="list-group-item">Humidity: {
                                        item.cod === "404"
                                            ? "Not Found!"
                                            : item.main.humidity
                                    }</li>
                                    <li className="list-group-item">Details: {
                                        item.cod === "404"
                                            ? 'Not Found!'
                                            : item.weather[0].description
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
