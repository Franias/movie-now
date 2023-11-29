import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/index';
// import firebase from 'firebase';
import {database, fbDatabase } from '../../services/firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import {
    StyledCardBody,
    StyledCardImg,
    StyledContainer, 
    StyledButton, 
    StyledRow, 
    StyledCard,
    StyledCardText,
    Title} from './styles'

import { doc, onSnapshot, collection, query, where, QuerySnapshot } from "firebase/firestore";


function Main() {

    const  [movies, setMovies] = useState([]);
    const db = firebase.firestore();
    db.collection("movie")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    return (
    <>
    <Header />
    

    <StyledContainer>
            <Title>Movie Now</Title>
            <StyledRow>

                
            <StyledCard>
                <StyledCardImg  variant="top" src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*JzDt_DAFQRA_uXMzSAkM7g.jpeg" />
                <StyledCardBody>
                    <StyledCard.Title>Insecure</StyledCard.Title>
                    <StyledCardText >
                    Some quick example text to build on the StyledCard title and make up the
                    bulk of the StyledCard's content.
                    </StyledCardText>
                    <StyledButton variant="outline-dark">Assista agora</StyledButton>
                </StyledCardBody>
                </StyledCard>
            </StyledRow>
        </StyledContainer>
    </>);
}

export default Main;