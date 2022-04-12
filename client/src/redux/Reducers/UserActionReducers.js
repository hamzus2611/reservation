import { GET_ADMIN, GET_ADMIN_FAIL, GET_ADMIN_SECCESS, GET_CLIENT, GET_CLIENT_FAIL, GET_CLIENT_SECCESS, GET_ORGANISATEUR, GET_ORGANISATEUR_FAIL, GET_ORGANISATEUR_SECCESS } from "../ActionTypes/ActionTypes"


const initState = {
  Loading: false,
  users: [],
  error: null
}


const User_Select = (state = initState, { type, payload }) => {
  switch (type) {

    case GET_ADMIN:
    case GET_CLIENT:
    case GET_ORGANISATEUR:
      return {
        ...state,
        Loading: true,
        users: [],
      }

    case GET_ADMIN_SECCESS:
    case GET_CLIENT_SECCESS:
    case GET_ORGANISATEUR_SECCESS:
      return {
        ...state,
        Loading: false,
        users: payload,
        error: null
      }

    case GET_ADMIN_FAIL:
    case GET_CLIENT_FAIL:
    case GET_ORGANISATEUR_FAIL:
      return {
        ...state,
        Loading: false,
        users: null,
        error: payload
      }
    default:
      return state
  }
}
export default User_Select;