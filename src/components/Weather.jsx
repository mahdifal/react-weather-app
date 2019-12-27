import React from 'react'

export default function Weather({ weather }) {
    return (
        <div>
            {weather.map(item => {
                return <div className="container">
                    <div className="row">
                        <div className="offset-md-3 col-md-8">
                            <div className="justify-content-center text-center" style={{ marginTop: '12rem' }}>
                                <div key={item.id} className="card bg-warning mb-3" style={{ maxWidth: "18rem" }}>
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
                                            <li className="list-group-item">Country: {
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
                        </div>
                    </div>
                </div>
            })}
        </div>
    )

}
