import React, { useState } from "react";
import {FormBlock, LabelQ, InputQ, Button} from './StyledComponentC'


const NewFileUpload = ({setImageData}) => {
  const initialFormState = {
    description: "",
    selectedFile: null
  }

  const [formState, setFormState] = useState(initialFormState)

  
  const handleSelectedFile = e => {
    e.preventDefault();
    setFormState({
      ...formState,
      selectedFile: e.target.files[0]
    });
    console.log(e.target.files[0], e.target)
  };

  const onChange = e => {
    e.preventDefault()
    setFormState({
      [e.target.name]: e.target.value 
    });
  };

  const handleUpload = event => {
    event.preventDefault();
    console.log(formState.selectedFile)
    let data = new FormData();
    data.append("file", formState.selectedFile)
    setImageData(data)
    console.log(Object.entries(data))
  }

    return (
      <form onSubmit={handleUpload} >
      <FormBlock >
        <LabelQ htmlFor="description">Description:</LabelQ>
        <InputQ style={{width:"25%"}}
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
      <Button data-cy="picSubmit" type="submit" > 
        Upload
      </Button>
    </form>
  )
}


export default NewFileUpload;

