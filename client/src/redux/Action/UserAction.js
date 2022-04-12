import { LOGIN, LOGIN_FAIL, LOGIN_SECCESS, REGISTER, REGISTER_FAIL, REGISTER_SECCESS, GET_CLIENT, GET_ORGANISATEUR, GET_CLIENT_SECCESS, GET_ORGANISATEUR_SECCESS, GET_CLIENT_FAIL, GET_ORGANISATEUR_FAIL, REGISTER_ORGANISATEUR, REGISTER_ORGANISATEUR_SECCESS, REGISTER_ORGANISATEUR_FAIL, REGISTER_ADMIN, REGISTER_ADMIN_SECCESS, REGISTER_ADMIN_FAIL, GET_ADMIN, GET_ADMIN_SECCESS, GET_ADMIN_FAIL } from "../ActionTypes/ActionTypes"

import axios from 'axios'
//Action register
export const register = (NewUser) => async (dispatch) => {
    dispatch({
        type: REGISTER
    });
    try {
        let res = await axios.post("user/register", NewUser);
        localStorage.setItem('token', res.data.token)
        dispatch({
            type: REGISTER_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data
        })
    }
}

// Action login
export const login = (User) => async (dispatch) => {
    dispatch({
        type: LOGIN
    });
    try {
        let res = await axios.post("user/login", User);
        localStorage.setItem('token', res.data.token)
        dispatch({
            type: LOGIN_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data
        })
    }
}

// Action getClient
export const getclient = () => async (dispatch) => {
    dispatch({
        type: GET_CLIENT
    });
    try {
        let res = await axios.get('/user/getclient');
        dispatch({
            type: GET_CLIENT_SECCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_CLIENT_FAIL,
            payload: error.response.data
        })
    }
}

// Action getorganisateur
export const getorganisateur = () => async (dispatch) => {
    dispatch({
        type: GET_ORGANISATEUR
    });
    try {
        let res = await axios.get('/user/getorganisateur')
        dispatch({
            type: GET_ORGANISATEUR_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_ORGANISATEUR_FAIL,
            payload: error.response.data
        })
    }
}

export const getAdmin = () => async (dispatch) => {
    dispatch({
        type: GET_ADMIN
    });
    try {
        let res = await axios.get('/user/getadmin')
        dispatch({
            type: GET_ADMIN_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_ADMIN_FAIL,
            payload: error.response.data
        })
    }
}

export const registerorganisateur = (user) => async (dispatch) => {
    dispatch({
        type: REGISTER_ORGANISATEUR
    });
    try {
        let res = await axios.post('/user/registerOrganisateur', user);
        dispatch({
            type: REGISTER_ORGANISATEUR_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: REGISTER_ORGANISATEUR_FAIL,
            payload: error.response.data
        })
    }
}

export const registeradmin = (user) => async (dispatch) => {
    dispatch({
        type: REGISTER_ADMIN
    });
    try {
        let res = await axios.post('!:user/registerAdmin', user);
        dispatch({
            type: REGISTER_ADMIN_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: REGISTER_ADMIN_FAIL,
            payload: error.response.data
        })
    }
}
