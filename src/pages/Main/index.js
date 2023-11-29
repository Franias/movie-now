import React from 'react';
import Header from '../../components/Header';
import {StyledContainer, StyledButton, StyledRow, StyledCard} from './styles'
function Main() {
    return <>
    <Header />
    

    <StyledContainer>
            <h1>Movie Now</h1>
            <StyledRow style={{
                display: 'flex', justifyContent: 'center'
            }}>
            <StyledCard style={{ width: 250, margin : 10 }}>
                <StyledCard.Img style={{
                    width: 180,
                    height: 180,
                    alignSelf: 'center',
                    paddingTop:20,
                    cursor: 'pointer',
                }} variant="top" src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*JzDt_DAFQRA_uXMzSAkM7g.jpeg" />
                <StyledCard.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <StyledCard.Title>Insecure </StyledCard.Title>
                    <StyledCard.Text style={{
                        fontSize: 20
                    }}>
                    Some quick example text to build on the StyledCard title and make up the
                    bulk of the StyledCard's content.
                    </StyledCard.Text>
                    <StyledButton style={{
                        width:200
                    }} variant="outline-dark">Go somewhere</StyledButton>
                </StyledCard.Body>
                </StyledCard>
            </StyledRow>
            
        </StyledContainer>
    </>
}

export default Main;