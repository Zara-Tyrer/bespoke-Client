import React, {useState} from 'react';
import {useGlobalState} from '../config/store'
import {withRouter} from 'react-router-dom'
import {addProduct} from '../services/productServices'
import {InputButton} from './StyledComponents'
import {CentralForm, FormBlock, LabelQ, InputQ, SelectQ} from './StyledComponentC'
import NewFileUpload from './NewFileUpload'
import api from '../config/api'

//New product page only accessible by Admin. Utilises the NewFileUpload component for image upload to S3. 

const NewProduct = ({history}) => {

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setFormState({
      ...formState,
      [name]: value
    })
  }
  
  //uses the imageData which has been set in NewFileUpload, as the setImageData function has been passed to the component as a prop. 
  async function uploadImage(newProduct) {
    try{
      if (imageData) {
        //if there is imageData available send a post request to uploads on the server
        const response = await api.post("/uploads", imageData)
        //get S3 image link back in the response
        const imageURL = response.data
        //append the image field to the newProduct (image is required in the schema for product)
        const updatedProduct = {
          ...newProduct,
          image: {
            description: imageData.description,
            fileLink: imageURL
          }
        }
        return updatedProduct
      }
      return newProduct
    }
    catch(error) {
      console.log(error)
      alert("Oops an error occurred uploading image, please try again");
      
    }
  }
  //on submit of new product form, new product object is created from formState values
  function handleSubmit(event) {
    event.preventDefault()
    const newProduct = {
      nail_length: formState.nail_length,
      nail_shape: formState.nail_shape,
      nail_style: formState.nail_style,
      cost: formState.cost
    }
    //async function called to upload image to S3 and send back link to save in new Product object
    uploadImage(newProduct).then((product) => {
      //new product created using post route (addProduct)
      addProduct(product).then((newProduct) => {
      //new product saved into global state
      dispatch({
        type: 'setProducts',
        data: [newProduct, ...products]
      })
      //return admin to products page
      history.push(`/products`)
      }).catch((error) => {
        const status = error.response ? error.response.status : 500
        console.log('Caught error creating product', error)
        if(status === 403)
            setErrorMessage("Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.")
        else
            setErrorMessage("Oops there was an error, please make sure you uploaded an image for the product")
      })
    })   
  }
  
  //initialize formstate to empty
  const initialFormState = {
    nail_length: 0,
    nail_shape: "",
    nail_style: "",
    cost: 0
  } 

  //local state
  const [formState,setFormState] = useState(initialFormState)
  const [errorMessage, setErrorMessage] = useState(null)
  //setImageData used in NewFileUpload
  const [imageData, setImageData] = useState(null)
  const {store, dispatch} = useGlobalState()
  const {products} = store

  //variables for nail length used in form dropdown
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
    marginLeft: "12em"
  }
  const confirmedDiv = {
    display: "flex",
    justifyContent: "center"
  }

  //render one form with 2 submit buttons: file upload component rendered at top, upon upload image data saved in local state. Upon Submit of new product, new product created with filelink that has come through in response. 
  return (
    <CentralForm>
      <NewFileUpload setImageData={setImageData} ></NewFileUpload>
      <div style={confirmedDiv}> 
        {imageData && (<img style={confirmTick} src="/check.png" alt="confirmed tick"></img>)}
      </div>
      <form id="newProductForm" onSubmit={handleSubmit}>
          {errorMessage && alert(errorMessage)}
          <FormBlock>
              <LabelQ for="nail_length">Nail Length</LabelQ>
              <SelectQ data-cy="productLength" required name="nail_length" id="nail_length" onChange={handleChange}>
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
              <LabelQ for="nail_shape">Nail Shape</LabelQ>
              <SelectQ data-cy="productShape" required name="nail_shape" id="nail_shape" onChange={handleChange}>
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
              <LabelQ>Nail Style</LabelQ>
              <InputQ data-cy="productStyle" required type="text" name="nail_style" placeholder="Enter a nail style" onChange={handleChange}></InputQ>
          </FormBlock>
          <FormBlock>
              <LabelQ>Cost</LabelQ>
              <InputQ data-cy="productCost" required type="text" name="cost" placeholder="Enter a price" onChange={handleChange}></InputQ>
          </FormBlock>
          <FormBlock>
              <InputButton data-cy="productSubmit" type="submit" value="Add product"></InputButton>
          </FormBlock>
      </form>
    </CentralForm>
  ) 

}

export default withRouter(NewProduct)
