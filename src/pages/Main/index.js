import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/index';
import firebase from 'firebase';
import {
    StyledCardBody,
    StyledCardImg,
    StyledContainer, 
    StyledButton, 
    StyledRow, 
    StyledCard,
    StyledCardText,
    Title} from './styles'
function Main() {

    const  [movies, setMovies] = useState([]);
    useEffect(() => {
        async function loadMovies(){
            const db = firebase.firestore();

            db.collection('movie')
              .get()
              .then((querySnapshot) =>{
                querySnapshot.forEach((doc) =>{
                    console.log(doc.data)
                });

              });
        }
        loadMovies();
    }, [])
    return <>
    <Header />
    

    <StyledContainer>
            <Title>Movie Now</Title>
            <StyledRow>
            <StyledCard style={{ width: 250, margin : 10 }}>
                <StyledCardImg  variant="top" src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*JzDt_DAFQRA_uXMzSAkM7g.jpeg" />
                <StyledCardBody>
                    <StyledCard.Title>Insecure </StyledCard.Title>
                    <StyledCardText >
                    Some quick example text to build on the StyledCard title and make up the
                    bulk of the StyledCard's content.
                    </StyledCardText>
                    <StyledButton variant="outline-dark">Go somewhere</StyledButton>
                </StyledCardBody>
                </StyledCard>
            </StyledRow>
        </StyledContainer>
    </>
}

export default Main;