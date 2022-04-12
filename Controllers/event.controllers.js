const Event = require('../models/Event')


exports.CreateEvent = async (req, res) => {
  const { Eventname, date, EventType, NumPlaceTotal, NumPlaceRest, Prix, Eventimage, id_User } = req.body;
  try {
    let NewEvent = await new Event({
      Eventname,
      date,
      EventType,
      NumPlaceTotal,
      NumPlaceRest,
      Prix,
      Eventimage,
      id_User
    })
    await NewEvent.save();
    return res.send(NewEvent);
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}


exports.DeleteEvent = async (req, res) => {

  try {
    const deleteEvent = await Event.findByIdAndDelete(req.params.id)
    res.send({ msg: `${deleteEvent.Eventname} was successfully Deleted` })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}


exports.EditEvent = async (req, res) => {

}

// getEvent 
exports.getevent = async (req, res) => {

  try {
    let event = await Event.find()
    return res.send(event);
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

//********* get event by id***** */

exports.getoneevent = async (req, res) => {
  const { id } = req
  try {
    let myevent = await Event.findById(req.params.id)
    console.log(req.params)
    return res.status(200).send(myevent)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}