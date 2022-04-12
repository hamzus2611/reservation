import React from 'react'
import './Events.css'
import { Link } from 'react-router-dom'

function EventsCard({ event }) {
    return (
        <div className="flip-card d-flex justify-content-around cellAction " >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={event.Eventimage} alt="" width="200" height="300" className="flip-card-front-img" />
                </div>
                <div className="flip-card-back">
                    <h1>{event.Eventname}</h1>
                    <Link to={`/event/${event._id}`}>
                        <button type="button" >Reserve</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


       {/* <p>{Event.}</p>
   <Link to={`/${movie.id}`}>
       <button type="button" >Trailer</button>
      </Link> */}

export default EventsCard