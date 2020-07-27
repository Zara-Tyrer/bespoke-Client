import React, {useState} from 'react';
import {useGlobalState} from '../config/store'
import {withRouter} from 'react-router-dom'
import {addOrder} from '../services/orderServices'
import {InputButton, ErrorText} from './StyledComponents'
import {CentralForm, FormBlock, LabelQ, InputQ, TextAreaQ, FormInfo, SelectQ} from './StyledComponentC'
import NewFileUpload from './NewFileUpload'
import api from '../config/api'

const NewOrder = ({history}) => {

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setFormState({
      ...formState,
      [name]: value
    })
  }

  async function uploadImage(newOrder) {
    try{
      if (imageData) {
        const response = await api.post("/uploads", imageData)
        const imageURL = response.data
        const updatedOrder = {
          ...newOrder,
          image: {
            description: imageData.description,
            fileLink: imageURL
          }
        }
        return updatedOrder
      }
      return newOrder
    }
    catch(error) {
      console.log(error)
      alert("Oops an error occurred uploading image, please try again");
      
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newOrder = {
      name: formState.name,
      address: formState.address,
      email: formState.email,
      phone_number: formState.phone_number,
      nail_length: formState.nail_length,
      nail_shape: formState.nail_shape,
      nail_style: formState.nail_style,
      cost: 30
    }

    uploadImage(newOrder).then((order) => {
      addOrder(order).then((newOrder) => {
      dispatch({
        type: 'setOrders',
        data: [newOrder, ...orders]
      })
      history.push(`/order/confirm/${newOrder._id}`)
    }).catch((error) => {
      const status = error.response ? error.response.status : 500
      console.log('Caught error creating order', error)
      if(status === 403)
                setErrorMessage("Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.")
            else
                setErrorMessage("Well, this is embarrassing... There was a problem on the server.")
    })
    })
  }
  const initialFormState = {
    // add auto-filled form if product selected from shop
    nail_length: 0,
    nail_shape: "",
    nail_style: "",
  } 
  const [formState,setFormState] = useState(initialFormState)
  const [errorMessage, setErrorMessage] = useState(null)
  const {store, dispatch} = useGlobalState()
  const {orders} = store
  const [imageData, setImageData] = useState(null)

  const nL17 = 17
  const nL18 = 18
  const nL19 = 19
  const nL20 = 20
  const nL21 = 21
  const nL22 = 22
  const nL23 = 23

  const confirmTick = {
    width: "2em",
    padding: "1em",
    marginTop: "-2.6em",
    marginLeft: "3em"
  }
  const confirmedDiv = {
    display: "flex",
    justifyContent: "center"
  }


  return (
    <div>
    <CentralForm>
      <div style={{paddingTop:"1em"}}>
        <FormInfo>
        <h3>Image Details</h3>
        <p>To include an example image, please choose a file and click 'Upload'. Your image will be submitted with your order.</p>
        </FormInfo>
        <NewFileUpload data-cy="fileUpload" setImageData={setImageData}></NewFileUpload>
        <div style={confirmedDiv}>
          {imageData && (<img style={confirmTick} src="/tick.png" alt="confirmed tick"></img>)}
        </div>
      </div>
      <form id="newOrderForm" onSubmit={handleSubmit}>
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        <FormInfo>
          <h3>Contact Details</h3>
        </FormInfo>
        <FormBlock>
            <LabelQ>Name*</LabelQ>
            <InputQ data-cy="nameOrder" required type="text" name="name" placeholder="Enter your name" onChange={handleChange}></InputQ>
        </FormBlock>
        <FormBlock>
            <LabelQ>Address</LabelQ>
            <TextAreaQ data-cy="addressOrder" required type="text" name="address" placeholder="Enter your address" onChange={handleChange}></TextAreaQ>
        </FormBlock>
        <FormBlock>
            <LabelQ>Email*</LabelQ>
            <InputQ data-cy="emailOrder" required type="text" name="email" placeholder="Enter your email" onChange={handleChange}></InputQ>
        </FormBlock>
        <FormBlock>
            <LabelQ>Phone Number</LabelQ>
            <InputQ data-cy="numberOrder" required type="text" name="phone_number" placeholder="Enter your phone number" onChange={handleChange}></InputQ>
        </FormBlock>
        <FormInfo>
          <h3>Order Details</h3>
        </FormInfo>
        <FormBlock>
            <LabelQ for="nail_length">Nail Length</LabelQ>
            <SelectQ data-cy="lengthOrder" required name="nail_length" id="nail_length" onChange={handleChange}>
              <option value={nL17} >17mm</option>
              <option value={nL18} >18mm</option>
              <option value={nL19} >19mm</option>
              <option value={nL20} >20mm</option>
              <option value={nL21} >21mm</option>
              <option value={nL22} >22mm</option>
              <option value={nL23} >23mm</option>
            </SelectQ>
            {/* <LabelQ>Nail Length*</LabelQ>
            <InputQ required type="text" name="nail_length" placeholder="Enter a nail length" onChange={handleChange}></InputQ> */}
        </FormBlock>
        <FormBlock>
            <LabelQ for="nail_shape">Nail Shape*</LabelQ>
            <SelectQ data-cy="shapeOrder" required name="nail_shape" id="cars" onChange={handleChange}>
              <option value="Oval">Oval</option>
              <option value="Round">Round</option>
              <option value="Square">Square</option>
              <option value="Squoval">Squoval</option>
              <option value="Stiletto">Stiletto</option>
              <option value="Coffin">Coffin/Ballerina</option>
              <option value="Almond">Almond</option>
            </SelectQ>
            {/* <LabelQ>Nail Shape*</LabelQ>
            <InputQ required type="text" name="nail_shape" placeholder="Enter a nail shape" onChange={handleChange}></InputQ> */}
        </FormBlock>
        <FormBlock>
            <LabelQ>Nail Style*</LabelQ>
            <InputQ data-cy="styleOrder" required type="text" name="nail_style" placeholder="Enter a nail style" onChange={handleChange}></InputQ>
        </FormBlock>
        <FormBlock>
            <p>Total £30</p>
        </FormBlock>
        <FormBlock>
            <InputButton data-cy="submitOrder" type="submit" value="Submit order"></InputButton>
        </FormBlock>
        
      </form>
    </CentralForm>
    </div>
  ) 

}

export default withRouter(NewOrder)