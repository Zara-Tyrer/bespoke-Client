import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {useGlobalState} from '../config/store'
import {registerUser} from '../services/authServices'
import {InputButton} from './StyledComponents'
import {CentralForm, FormBlock, LabelQ, InputQ, FormInfo} from './StyledComponentC'

const RegisterAdmin = ({history}) => {
    const initialFormState = {
        username: "",
        email: "",
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
        registerUser(userDetails).then(() => {
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
            <form onSubmit={handleSubmit}>
                {errorMessage && alert(errorMessage)}
                <FormInfo style={{paddingTop:"2em"}}>
                    <h3>Register a new admin</h3>
                </FormInfo>
                <FormBlock>
                    <LabelQ>Username</LabelQ>
                    <InputQ required type="text" name="username" placeholder="Enter a username" onChange={handleChange}></InputQ>
                </FormBlock>
                <FormBlock>
                    <LabelQ>Email</LabelQ>
                    <InputQ required type="email" name="email" placeholder="Enter an email" onChange={handleChange}></InputQ>
                </FormBlock>
                <FormBlock>
                    <LabelQ>Password</LabelQ>
                    <InputQ required type="password" name="password" placeholder="Enter a password" onChange={handleChange}></InputQ>
                </FormBlock>
                <FormBlock>
                    <InputButton type="submit" value="Register Admin"></InputButton>
                </FormBlock>  
            </form>
        </CentralForm>
    )
}
export default withRouter(RegisterAdmin)