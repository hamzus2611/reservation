import React from "react";
import "./Events.scss";
import { Link } from "react-router-dom";

function EventsCard({ event }) {
  return (
    <div class="product">
      <span class="product__price">{event.Prix} dt</span>
      {/* <img class="product__image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26438/shoe.png"> */}
      <img
        src={event.Eventimage}
        alt=""
        width="200"
        height="300"
        className="flip-card-front-img"
      />
      <h1 class="product__title">{event.Eventname}</h1>
      <hr />
      <p>{event.desc} </p>
      <a href="#" class="product__btn btn">
        <Link to={`/event/${event._id}`}>
          <button type="button">Reserve</button>
        </Link>{" "}
      </a>
    </div>

    // <div className="flip-card d-flex justify-content-around cellAction ">
    //   <div className="flip-card-inner">
    //     <div className="flip-card-front">
    //       <img
    //         src={event.Eventimage}
    //         alt=""
    //         width="200"
    //         height="300"
    //         className="flip-card-front-img"
    //       />
    //     </div>
    //     <div className="flip-card-back">
    //       <h1>{event.Eventname}</h1>
    //       <Link to={`/event/${event._id}`}>
    //         <button type="button">Reserve</button>
    //       </Link>
    //     </div>
    //     <div>

    //     </div>
    //     {event.Eventname}
    //   </div>
    // </div>
  );
}

{
  /* <p>{Event.}</p>
   <Link to={`/${movie.id}`}>
       <button type="button" >Trailer</button>
      </Link> */
}

export default EventsCard;
