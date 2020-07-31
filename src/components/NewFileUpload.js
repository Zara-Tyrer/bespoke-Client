import React, { useState } from "react";
import {FormBlock, LabelQ, InputQ, Button} from './StyledComponentC'

//component used to upload an image. will render a small from that will set the image details and description in state

//setImageData function is passed down as a prop from NewOrder and NewProduct 
const NewFileUpload = ({setImageData}) => {
  //initialize form state 
  const initialFormState = {
    description: "",
    selectedFile: null
  }

  //local form state 
  const [formState, setFormState] = useState(initialFormState)

  //file event handling - setFormState for uploaded file 
  const handleSelectedFile = e => {
    e.preventDefault();
    setFormState({
      ...formState,
      selectedFile: e.target.files[0]
    });
    console.log(e.target.files[0], e.target)
  };

  //handle on change in form for description (setFormState)
  const onChange = e => {
    e.preventDefault()
    setFormState({
      [e.target.name]: e.target.value 
    });
  };

  //what happens on submit (upload button)
  const handleUpload = event => {
    event.preventDefault();
    //troubleshooting - check console for uploaded image
    console.log(formState.selectedFile)
    //create new formData called data
    let data = new FormData();
    //append the file to data
    data.append("file", formState.selectedFile)
    //pass data to setImageData so it can be used in NewProduct and NewOrder
    setImageData(data)
  }

  //render form with description, file input and upload button 
    return (
      <form onSubmit={handleUpload} >
      <FormBlock >
        <LabelQ htmlFor="description">Description:</LabelQ>
        <InputQ style={{width:"20%"}}
          type="text"
          name="description"
          onChange={onChange}
          placeholder="Description"
        ></InputQ>
        <InputQ data-cy="fileUpload" style={{width:"25%"}}
          type="file"
          name="file"
          id=""
          onChange={handleSelectedFile}
        ></InputQ>
      </FormBlock>
      <Button style={{marginLeft:"40%"}} data-cy="picSubmit" type="submit" > 
        Upload
      </Button>
    </form>
  )
}


export default NewFileUpload;

