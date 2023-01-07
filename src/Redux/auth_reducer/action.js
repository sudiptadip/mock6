import axios from 'axios'
import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './action.type'



export const Signuprequest = (data) => dispatch => {
  dispatch({ type: SIGNUP_REQUEST })
  axios.post("https://api-for-todo-mock-6.onrender.com/usersignupdata",data)
    .then((response) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data})
      // console.log(response.data)
    }).catch((e) => {
      dispatch({ type: SIGNUP_FAILURE })
      // console.log(e)
    })
}