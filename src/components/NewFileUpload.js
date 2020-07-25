import React, { useState } from "react";



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
    // data = ({ 
    //   selectedFile: formState.selectedFile, 
    //   description: formState.description
    // })
    setImageData(data)
    console.log(Object.entries(data))
  }

  //   axios
  //     .post(endpoint, data)
  //     .then(() => {
  //       this.props.history.push("/");
  //     })
  //     .catch(error => {
  //       alert("Oops some error happened, please try again");
  //     });
  

  


    return (
      
      <form onSubmit={handleUpload} >
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          onChange={onChange}
          placeholder="Description"
        ></input>
      </div>

      <div className="form-group">
        <input
          type="file"
          name="file"
          id=""
          onChange={handleSelectedFile}
        ></input>
      </div>
      <button type="submit" > 
        Upload
      </button>
    </form>
    
  )
}


export default NewFileUpload;

