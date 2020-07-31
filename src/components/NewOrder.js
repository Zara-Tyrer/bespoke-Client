import React, {useState} from 'react';
import {useGlobalState} from '../config/store'
import {withRouter} from 'react-router-dom'
import {addOrder} from '../services/orderServices'
import {InputButton} from './StyledComponents'
import {CentralForm, FormBlock, LabelQ, InputQ, TextAreaQ, FormInfo, SelectQ, SubmitButton} from './StyledComponentC'
import NewFileUpload from './NewFileUpload'
import api from '../config/api'

//component is for a custom order with all field attributes empty

const NewOrder = ({history}) => {

  //handle change in form and setFormState to be used in creation of order using key-value pairs from name of field and value entered
  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setFormState({
      ...formState,
      [name]: value
    })
  }

  //function checks if there is imageData (from NewFileUpload where setImageData is used with the file data)
  async function uploadImage(newOrder) {
    try{
      if (imageData) {
        //if image data available use api (axios request to heroku server) to create an upload using the imageData
        const response = await api.post("/uploads", imageData)
        //save the response data (fileURL from S3 upload) in ImageURL to save in order object
        const imageURL = response.data
        //add the image field to the newOrder object using destructuring
        const updatedOrder = {
          ...newOrder,
          image: {
            description: imageData.description,
            fileLink: imageURL
          }
        }
        return updatedOrder
      }
      // if no image data, return the newOrder and the image field will have default S3 image link set in schema in server
      return newOrder
    }
    //alert the user if there has been an error uploading image (must click upload)
    catch(error) {
      console.log(error)
      alert("Oops an error occurred uploading image, please try again");
    }
  }

  //upon submit, use the formState to create the attributes of the newOrder object
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
    console.log(newOrder)
    //call async function to upload the image data from NewFileUpload and post to create S3 fileLink and then append to the newOrder object
    uploadImage(newOrder).then((order) => {
      //call add order to send a post request for the newOrder with fileLink 
      addOrder(order).then((newOrder) => {
      //save newOrder in the global state/store with other orders
      dispatch({
        type: 'setOrders',
        data: [newOrder, ...orders]
      })
      //send to confirmation page
      history.push(`/order/confirm/${newOrder._id}`)
      //catch any errors and alert the user (see alert in form)
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

  //set initial form state to empty
  const initialFormState = {
    nail_length: 0,
    nail_shape: "",
    nail_style: "",
  } 

  //local state
  const [formState,setFormState] = useState(initialFormState)
  const [errorMessage, setErrorMessage] = useState(null)
  const {store, dispatch} = useGlobalState()
  const {orders} = store
  //setImageData in NewFileUpload, pass as prop to component
  const [imageData, setImageData] = useState(null)

  // variables for the nail_length dropdown
  const nL17 = 17
  const nL18 = 18
  const nL19 = 19
  const nL20 = 20
  const nL21 = 21
  const nL22 = 22
  const nL23 = 23

  //local styles
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

  //essentially 2 forms rendered but styled to look as one. 
  //File upload at the top which will hold the image data in local state. 
  //On submit of whole form (submit order) the post request on uploads will occur returning the fileLink which is saved in the NewOrder object
  //styled components used for a consistent form styling
  return (
    <div>
      <CentralForm>
        <div style={{paddingTop:"1.5em", paddingBottom:"1.5em"}}>
          <div>
            <FormInfo>
              <h3>Image Details</h3>
              <p>To include an image, please choose a file and click 'Upload'. Your image will be submitted with your order.</p>
            </FormInfo>
            <NewFileUpload setImageData={setImageData}></NewFileUpload>
            <div style={confirmedDiv}>
              {imageData && (<img style={confirmTick} src="/tick.png" alt="confirmed tick"></img>)}
            </div>
          </div>
          <form id="newOrderForm" onSubmit={handleSubmit}>
            {errorMessage && alert(errorMessage)}
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
              <LabelQ htmlFor="nail_length">Nail Length*</LabelQ>
              <SelectQ data-cy="lengthOrder" required name="nail_length" id="nail_length" onChange={handleChange}>
                <option>Choose a length</option>
                <option value={nL17} >17mm</option>
                <option value={nL18} >18mm</option>
                <option value={nL19} >19mm</option>
                <option value={nL20} >20mm</option>
                <option value={nL21} >21mm</option>
                <option value={nL22} >22mm</option>
                <option value={nL23} >23mm</option>
              </SelectQ>
            </FormBlock>
            <FormBlock>
              <LabelQ htmlFor="nail_shape">Nail Shape*</LabelQ>
              <SelectQ data-cy="shapeOrder" required name="nail_shape" id="nail_shape" onChange={handleChange}>
                <option>Choose a shape</option>
                <option value="Oval">Oval</option>
                <option value="Round">Round</option>
                <option value="Square">Square</option>
                <option value="Squoval">Squoval</option>
                <option value="Stiletto">Stiletto</option>
                <option value="Coffin">Coffin/Ballerina</option>
                <option value="Almond">Almond</option>
              </SelectQ>
            </FormBlock>
            <FormBlock>
              <LabelQ>Nail Style*</LabelQ>
              <InputQ data-cy="styleOrder" required type="text" name="nail_style" placeholder="Enter a nail style" onChange={handleChange}></InputQ>
            </FormBlock>
            <FormBlock>
              <p>Total £30</p>
            </FormBlock>
            <FormBlock>
              <SubmitButton data-cy="submitOrder" type="submit" value="SUBMIT ORDER"></SubmitButton>
            </FormBlock>
          </form>
        </div>
      </CentralForm>
    </div>
  ) 

}

export default withRouter(NewOrder)