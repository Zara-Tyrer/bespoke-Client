import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {useGlobalState} from '../config/store'
import {loginUser, setLoggedInUser} from '../services/authServices'
import {InputButton} from './StyledComponents'
import {CentralForm, FormBlock, LabelQ, InputQ, FormInfo} from './StyledComponentC'

const SignIn = ({history}) => {
    const initialFormState = {
        username: "",
        password: ""
    } 
    const [userDetails,setUserDetails] = useState(initialFormState)
    const [errorMessage, setErrorMessage] = useState(null)
    const {dispatch} = useGlobalState()

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        // Attempt login on server
        loginUser(userDetails).then(() => {
            setLoggedInUser(userDetails.username)
            // set logged in admin in global state and redirect to dashboard
            dispatch({
                type: "setLoggedInUser",
                data: userDetails.username
            })
            history.push("/dashboard")

        }).catch((error) => {
            if (error.response && error.response.status === 401)
                setErrorMessage("Authentication failed. Please check your username and password.")
            else   
                setErrorMessage("There may be a problem with the server. Please try again after a few moments.")
        })		
    }

    return (
        <CentralForm>
            <form data-cy="loginForm" onSubmit={handleSubmit}>
                {errorMessage && alert(errorMessage)}
                <FormInfo style={{paddingTop:"2em"}}>
                    <h3>Admin Login</h3>
                </FormInfo>
                <FormBlock>
                    <LabelQ>Username</LabelQ>
                    <InputQ data-cy="username" required type="text" name="username" placeholder="Enter a username" onChange={handleChange}></InputQ>
                </FormBlock>
                <FormBlock>
                    <LabelQ>Password</LabelQ>
                    <InputQ data-cy="password" required type="password" name="password" placeholder="Enter a password" onChange={handleChange}></InputQ>
                </FormBlock>
                <FormBlock>
                    <InputButton data-cy="loginButton" type="submit" value="Login"></InputButton>
                </FormBlock>  
            </form>
        </CentralForm>
    )
}
export default withRouter(SignIn)