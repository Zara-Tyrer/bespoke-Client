import styled from 'styled-components'
import background from '../img/backgroundWater.png'
import nailSpill from '../img/nailSpill.jpg'
import {Link} from 'react-router-dom'



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
  margin: 0 0 0 33%;
`

export const CentralForm = styled.div `
  background-image: url(${background});
  width: 60vw;
  margin: auto;
  border-radius: 30px;
  background-size: cover;
`

export const FormBlock = styled.div `
  margin: 0.5em;
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`

export const InputQ = styled.input `
  width: 50%;
  margin: .2em;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`
export const SelectQ = styled.select `
  width: 50%;
  margin: .2em;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`

export const LabelQ = styled.label `
  font-size: 1em;
  width: 120px;
  padding-top: 5px;
`

export const TextAreaQ = styled.textarea `
  height: 150px;
  margin: .5em;
  width: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`
export const FormInfo = styled.div `
  width: 70%;
  margin: auto;
`

export const ConfirmationBox = styled.div `
  display: flex;
  flex-direction: column;
  margin: 1em;
  background-image: url(${background});
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




//homepage components
export const HomeWrapper = styled.div `
  display: flex;
  flex-direction: column;
  background: blue;
  
`

export const HomeTopRow = styled.div `
  display: flex;
  justify-items: center;
  background-image: url(${nailSpill});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  height: auto;
`
export const TopLeft = styled.div `
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: flex-end;
  backdrop-filter: brightness(55%);
  padding: 8em;
`
export const TopRight = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  backdrop-filter: brightness(55%);
`

export const OrderNowHome = styled(Link) `
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: .6em;
    font-size: 2em;
    width: 300px;
    font-family: Abel;
    letter-spacing: 1px;
    box-shadow: 0 8px 6px -6px black;
    border: 4px solid #FFFFFF;
    text-decoration: none;
    text-align: center;
`

export const HomeHeading = styled.div `
  display: flex;
  justify-content: flex-end;
  font-size: 50px;
  color: #FFFFFF;
`

export const HomeSubHead = styled.div`
  color: white;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-end;
  font-weight: lighter;
`
export const HomeMidRow = styled.div`
  background-color: #B4D3ED;
  height: auto;
  display: flex;
`

export const MidLeft = styled.div `
  display: flex;
  width: 50%;
`

export const Lookbook = styled.div `
  width: 300px;
  padding: 8% 0% 8% 20%;
`

export const LookWrite = styled.div `
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 61px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`
export const MidRight = styled.div`
  display: flex;
  font-family: Abel;
  width: 50%;
  background-image: url(${background});
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
`

export const MidRightTop = styled.div`
  display: flex;
  justify-content: center;
`

export const Circle = styled.div `
  width: 400px;
  height: 400px;
  background: #B4D3ED;
  border: none;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
`

export const Giftcard = styled.img `
  transform: rotate(-30deg);
  max-width: 70%;
  height: auto;
  position: relative;
  z-index: 3;
  margin-left: 50px;
  ${'' /* margin-right: 50%;
  margin-bottom: 50%; */}
`
export const Squad = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 72px;
  font-family: Abel;
  justify-content: center;
  ${'' /* align-items: center; */}
  position: relative;
  z-index: 4;
`

export const ThirdRow = styled.div `
  display: flex;
  flex-direction: column;
  background: white;
`
export const InstaLink = styled.div `
  height: 30vh;
  background: white;
  font-size: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #C05277;
  font-family: Abel;
`
export const InstaPics = styled.div `
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  margin: auto;
  column-gap: 45px;
  background: white;
`

export const Pic = styled.img `
  width: 200px;

`


