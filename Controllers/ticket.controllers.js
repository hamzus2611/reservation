const Event = require('../models/Event');
const ticket = require('../models/Ticket')
const jwt = require('jsonwebtoken');
const config = require('config');

const secret = config.get('secret');

// const date = require('date')

//****** */ cree une ticket **********
exports.CreateTicket = async (req, res) => {
    const { Date, NumPlaceReserve, id_Event } = await req.body;
    const token = req.headers.authorization;
    //sconsole.log(req.headers)
    const decodedToken = await jwt.verify(token, secret);
    const id_User = await decodedToken.id;

    // const today= await date.now()
    try {
        let evt = await Event.findOne({ id_Event })
        if (!evt) {
            res.status(501).json("Vérifier l'evenement")
        }
        // else if(Date <= today){
        //  res.status(301).json("L'evenement")
        // }
        let TicketNum = (evt.NumPlaceTotal - evt.NumPlaceRest + NumPlaceReserve);
        //const x= await (evt.NumPlaceRest.parseInt() - NumPlaceReserve.parseInt())
        console.log(evt.NumPlaceRest)
        //let evnt = await Event.findByIdAndUpdate(id_Event, { NumPlaceRest:x  })
        if (TicketNum <= 0) {
            res.status(301).json('Les tickets sont complé')
        }
        let NewTicket = await new ticket({
            TicketNum,
            Date,
            NumPlaceReserve,
            id_Event,
            id_User
        })
        NewTicket.save();
        res.send(NewTicket);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}


// ****** Annulation ticket

exports.AnnulationTicket = async (req, res) => {


    try {
        const ticket = await Ticket.findOneByIdAndDelete(req.body._id)
        const event = await Event.findByIdAndUpdate(ticket.id_Event, { NumPlaceRest: NumPlaceRest + ticket.NumPlaceReserve })

        res.status(301).json("Ticket annuler par successe")

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }

}