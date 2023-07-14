import React from "react";

export default function Card(props) {
    const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props.card
    return (
        <div className="card">
            <img className="card-img" src={imageUrl}/>
            <div className="card-info">
                <div className="card-loc">
                    <p className="loc-text">{location}</p>
                    <a href={googleMapsUrl}><p className="google-map-text">View on Google Maps</p></a>
                </div>
                <h1 className="card-title">{title}</h1>
                <p className="card-date-text">{startDate} - {endDate}</p>
                <p className="card-desc">{description}</p>
            </div>
        </div>
    )
}