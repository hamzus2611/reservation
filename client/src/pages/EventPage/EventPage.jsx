import React from "react";
import { getoneevent } from "../../redux/Action/EventAction";
import { CreateTicket } from "../../redux/Action/TicketAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/NavbarH";
import { Link, useParams } from "react-router-dom";
import "./EventPage.scss";
import { useState } from "react";

function EventPage() {
  const { id } = useParams();
  const [numval, setNumval] = useState(["1", "2", "3"]);
  const Add = numval.map((Add) => Add);
  const [optionsState, setoptionsState] = useState(0);
  const token = localStorage.getItem("token");
  const { Loading, event, error } = useSelector((state) => state.Event_Select);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getoneevent(id));
  }, []);

  const handelReserv = () => {
    dispatch(
      CreateTicket(
        {
          Date: Date.now(),
          NumPlaceReserve: optionsState,
          id_Event: id
        },
        token
      )
    );
  };
  const SelectNumber = (event) => {
    event.preventDefault();

    console.log(numval[event.target.value]);
    setoptionsState(numval[event.target.value]);
  };

  return (
    <div>
      <div className="homeContainerP">
        <Navbar />
        <div>
          {Loading ? (
            <h1> Loading</h1>
          ) : (
            <div className="image-block">
              <figure>
                <h1>The Beach</h1>
                <img src={event.Eventimage} alt="" width="100%" height="100%" />
                {/* <img
                  src="https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                /> */}
                <figcaption>
                  <div className="dflex">
                    <h3>{event.Eventname}</h3>

                    <h6>
                      {event.Prix}dt {event.date}
                    </h6>
                  </div>
                  <p> {event.desc}</p>
                  <select
                    onChange={(e) => SelectNumber(e)}
                    name="num_res"
                    id="Num_res"
                  >
                    {Add.map((address, key) => (
                      <option value={key}>{address}</option>
                    ))}
                    {/* <option value="0">--Numero de place a reserve--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option> */}
                  </select>
                  {token ? (
                    <button type="submit" onClick={handelReserv}>
                      Reserve
                    </button>
                  ) : (
                    <Link to={"/login"}>
                      <button>Reserve</button>
                    </Link>
                  )}
                </figcaption>
              </figure>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventPage;
