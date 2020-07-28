import styled from 'styled-components'
import {Link} from 'react-router-dom'

const titleFontFamily = 'Cabin'



// Container formatting
//cass edit width to 100vw from 90vw
export const Page = styled.div `
    font-family: 'Cabin';
    width: 100vw;
    color: #525252;
`
export const Block = styled.div `
    display: grid;
    width: 100vw;
`
export const Row = styled.div `
    display: flex;
    width: 100vw;
`

// Error styles
export const ErrorText = styled.p `
    color: red;
`

// Form styles
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

// Edit and delete buttons
export const Button = styled.button `
    background-color: #D3A29C;
    color: white;
    width: 100px;
    padding: .2em;
    border: none;
    font-size: 1.2em;
    margin: 1em;
`

// Navbar styles
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
// Dashboard nav styles

export const DashboardNavDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #D3A29C;
  `
export const AdminSide = styled.div `
    display: flex;
    align-items: flex-start;
`
export const DashboardLink = styled(Link) `
    font-size: 1.2em;
    text-decoration: none;
    color: #525252;
    margin: 1em;
    padding: .2em .5em;
    font-family: ${titleFontFamily};
`
export const DashboardButton = styled(Link) `
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
    text-decoration: none;
    text-align: center;
`

// Footer styles
export const FooterContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw
`
export const FooterLink = styled(Link) `
    font-size: 0.8em;
    text-decoration: none;
    color: #000000;
    margin: 0.2em;
    padding: .2em .5em;
    font-family: ${titleFontFamily};
    font-weight: 700;
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
export const AdminLoginButton = styled(Link) `
    font-family: ${titleFontFamily};
    color: #D3A29C;
    
    font-size: 1.2em;
    margin-bottom: 0.7em
`

// Lookbook and shop styles 
export const ShopLink = styled(Link) `
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
    text-decoration: none;
    text-align: center
`

export const OrderLink = styled.button `

` 

export const CustomiseOrder = styled(Link) `
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
    text-decoration: none;
    text-align: center;
`
// Dashboard styles

export const DashboardContainer = styled.div `
    display: flex;
`

//Orders Style
export const OrdersContainer = styled.div `
    display: flex
`

// Product styling
export const ProductContainer = styled.div `
    display: flex;
    flex-direction: column;

`
export const ProductsContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`
export const ProductCard = styled.div `
    padding: 2em;
    width: 15vw;
`
export const ProductsDiv = styled.div `
    display: flex;
`
export const ProductsGrid = styled.div `
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto;
    grid-auto-flow: row; 
`

// 404 not found styles
export const NotFoundContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFD4D7;
`
export const BackLink = styled(Link) `
    padding: 3em 2em 0em 2em;
    font-family: 'Cabin';
    text-decoration: none;
    color: #D3A29C;
`

//orders styling 
export const OrderContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin: 1em;
    padding: 1.5em;
    padding-bottom: none;
    background-color: #FFF3F1;
    box-shadow: 6px 5px 19px -3px rgba(0,0,0,0.5);
`
export const OrderInfoDiv = styled.div `
    font-size: 10px;
    padding-top: 7px;
`
export const OrderNameDiv = styled.div `
    border-top: 1px solid #D3A29C;
    padding-top: 1em;
    font-size: 10px;
`
export const OrderButton = styled.button `
    margin-top: 10px;
    background-color: #FFF3F1;
    border: 3px solid white;
    color: #525252
`

export const OrderButtons = styled.div `
    display: flex;
    justify-content: space-between;
`