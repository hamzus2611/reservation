import { CREATE_EVENT, CREATE_EVENT_SECCESS, CREATE_EVENT_FAIL, GET_EVENT, GET_EVENT_SECCESS, GET_EVENT_FAIL, GET_ONE_EVENT, GET_ONE_EVENT_SECCESS, GET_ONE_EVENT_FAIL, LOGOUT } from "../ActionTypes/ActionTypes"

import axios from "axios"

export const CreateEvent = (NewEvent) => async (dispatch) => {
    dispatch({
        type: CREATE_EVENT
    });
    try {
        let res = await axios.post('/event/CreateEvent', NewEvent);
        dispatch({
            type: CREATE_EVENT_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: CREATE_EVENT_FAIL,
            payload: error.response.data
        });
    }
}

export const getevent = () => async (dispatch) => {
    dispatch({
        type: GET_EVENT
    });
    try {
        let res = await axios.get('/event/getevent')
        dispatch({
            type: GET_EVENT_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_EVENT_FAIL,
            payload: error.response.data
        })
    }
}

export const getoneevent = (id) => async (dispatch) => {
    dispatch({
        type: GET_ONE_EVENT
    });
    try {
        console.log(id)
        let res = await axios.get(`/event/getoneevent/${id}`)
        dispatch({
            type: GET_ONE_EVENT_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_ONE_EVENT_FAIL,
            payload: error.response.data
        })
    }
}
export const logoutUser = () => dispatch => {
    localStorage.removeItem("token");
    dispatch({
        type: LOGOUT
    })


}