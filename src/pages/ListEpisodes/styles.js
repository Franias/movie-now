import { Container, Button } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledContainer= styled(Container)`
flex-direction: column;
justify-content: center;
align-items: center;
display:flex;
height: 100%;
width: 100%;
padding-top: 100px;
margin-top:100px;
border-radius: 4px;
border-style: solid;`

export const StyledButton = styled(Button)`

`
export const Title = styled.h1
`
color: #fff;
margin-top: 20px;
`
export const List = styled.ul`
padding: 100px 10px 10px 10px;
list-style: none;
width: 80%;
> li{
    color: #fff;
    display: flex;
    justify-content: space-between;
    width: 90%;
}`

