import styled from 'styled-components';
import {Row, Button,Container, Card, } from 'react-bootstrap';

export const StyledContainer = styled(Container)`
padding-top:50;
display: flex;
flex-direction:column;
align-itens: center;
min-width: 300;
`;

export const Title = styled.h1`
color: #fff;
font-family= ubuntu;
font-size = 20;
justify-content: center;
align-items: center;
`

export const StyledRow = styled(Row)`
display: flex;
justify-content: center`;
export const StyledButton = styled(Button)`
width: 100%;`;

export const StyledCard = styled(Card)`
width: 250px;
margin: 10px;
`

export const StyledCardImg = styled(Card.Img)`
width: 220px;
heigh: 320px;
align-self: center;
padding-top: 20 px;
cursor: pointer;`

export const StyledCardBody = styled(Card.Body)`
    display: fle;
    flex-direction: column;
    justify-content: space-between;
`

export const StyledCardText = styled(Card.Text)`
    fontSize: 20`