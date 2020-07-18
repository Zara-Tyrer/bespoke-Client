import styled from 'styled-components'
import {Link} from 'react-router-dom'

const titleFontFamily = 'Cabin'
const fontFamily = 'Roboto'
const accentColor = '#E00DDD'

// container formatting
export const Page = styled.div `
    margin: 1em;
    font-family: ${fontFamily};
    width: 90vw;
`
export const Block = styled.div `
    display: grid;
    width: 100vw;
`
export const Row = styled.div `
    display: flex;

`

// text formatting
export const Title = styled.h1 `
    font-family: ${titleFontFamily};
    font-size: 3em;
`

export const ErrorText = styled.p `
    color: red;
`

// form formatting
export const InputButton = styled.input `
    background-color: #D3A29C;
    color: white;
    padding: .2em;
    border: none;
    font-size: 1.2em;
    width: 200px;
    font-family: Abel;
    letter-spacing: 3px;
    box-shadow: 0 8px 6px -6px black;
    border: 5px solid #FFFFFF;
 
`
export const Input = styled.input `
    width: 60vw;
    margin: .5em;
`

export const Label = styled.label `
    font-size: 1.2em;
`
export const TextArea = styled.textarea `
    height: 200px;
    margin: .5em;
    width: 70vw;
`

// edit and delete buttons
export const Button = styled.button `
    background-color: #D3A29C;
    color: white;
    width: 100px;
    padding: .2em;
    border: none;
    font-size: 1.2em;
    margin: 1em;
`

// link formatting
export const Nav = styled(Link) `
    font-size: 1.2em;
    text-decoration: none;
    color: #525252;
    margin: 1em;
    padding: .2em .5em;
    font-family: ${titleFontFamily};
`
export const Logo = styled(Link) `

`



// Footer styles
export const FooterContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const FooterLink = styled(Link) `
    font-size: 1.2em;
    text-decoration: none;
    color: #525252;
    margin: 1em;
    padding: .2em .5em;
    font-family: ${titleFontFamily};
`
export const RowFooter = styled.div `
  bottom: 0;
  width: 100%;
  height: 2.5rem;
`

export const NavBlock = styled.div `
  display: flex;
  flex-direction: column;
  margin: 0px 100px 0px 100px;
  align-items: center
  
`