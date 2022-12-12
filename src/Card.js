import React from 'react';
import './style.css';

export default function Card(props) {
  return(
    <section className="section-card">
      <div className="card">
      <img className="card-img" src={props.data.imageUrl} />
          <div className="card-info">
            <div className="card-info-loc">
              <img className="card-img-loc" src="https://www.citypng.com/public/uploads/preview/red-gps-location-symbol-icon-hd-png-116369431412wisxxt5bl.png"/>
              <p className="card-name-loc">{props.data.location}</p>
              <a className="card-link" href={props.data.googleMapsUrl}>View on Google Maps</a>
            </div>
          <h1 className="card-title">{props.data.title}</h1>
          <div className="card-date">{props.data.startDate} - {props.data.endDate}</div>
          <p className="card-desc">{props.data.description}</p>
        </div>
      </div>
      <hr/>
    </section>
  );
}