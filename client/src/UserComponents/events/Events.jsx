import React from 'react'
import EventsCard from './EventsCard'
import { getevent } from "../../redux/Action/EventAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import './Events.scss'


function Events() {

  const { Loading, event, error } = useSelector((state) => state.Event_Select);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getevent())
  }, [])

  return (
    <div className="Containers">
      {Loading ?
        <h1> Loading</h1> :
        <div className="Movie-Containers">
          {event.map((event) => (<EventsCard key={event._id} event={event} />))}
        </div>}
    </div>
  )
}


export default Events

