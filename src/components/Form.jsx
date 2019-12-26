import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'

export default function Form({ getWeather }) {
    const handleSubmit = e => {
        e.preventDefault();
        let city = document.querySelector('#city').value;
        let country = document.querySelector('#country').value;

        if (city === '' && country === '') {
            let alert = document.querySelector('.my-alert');
            alert.style.display = 'block';
            setTimeout(() => {
                alert.style.display = 'none';
            }, 3000)
            return false;
        }

        return { city, country };
    }
    return (
        <div className="container form-back">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-center" style={{ marginTop: '5rem' }}>
                        <h2 className="text-orange">Weather App</h2>
                        <span>
                            <FontAwesomeIcon
                                icon={faCloudSun}
                                size="lg"
                                color="#ffffff"
                            />
                        </span>
                    </div>
                    <div className="form align-self-center" style={{ marginTop: '3rem' }}>
                        <form onSubmit={getWeather}>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text" className="form-control" id="city" placeholder="Enter your city ..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <input type="text" className="form-control" id="country" placeholder="Enter your country ..." />
                            </div>
                            <button type="submit" className="btn btn-light btn-block">Submit</button>
                        </form>
                    </div>
                    <div className="footer align-self-end mt-3">
                        <div className="alert alert-danger my-alert" style={{ display: 'none' }}>
                            please enter your city and country
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
