import styled from 'styled-components'
import background from '../img/backgroundWater.png'



// const titleFontFamily = 'Cabin'
// const fontFamily = 'Roboto'

export const QueryContainer = styled.div `
  background-color: #FFF3F1;
  margin: 1em;
  width: 38vw;
`

export const InnerContent = styled.div `
  padding: 1em;
`

export const Button = styled.button `
  background-color: #D3A29C;
  color: white;
  width: 150px;
  padding: .2em;
  border: none;
  font-size: 0.9em;
  margin: 1em;
`

export const CentralForm = styled.div `
  background-image: url(${background});
  width: 70vw;
  margin: auto;
  border-radius: 30px;
`

export const FormBlock = styled.div `
  margin: 1em;
  padding: 1em;
  display: flex;
  justify-content: space-around;

  
` 

export const LabelQ = styled.label `
    font-size: 1em;
`

export const ConfirmationBox = styled.div `
  display: flex;
  flex-direction: column;
  margin: 1em;
  background-image: url(${'/backgroundWater.png'});
  padding: 5em;
  border-radius: 30px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6em;
  margin-bottom: 6em;
`