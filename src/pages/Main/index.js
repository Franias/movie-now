import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/index';
import { Link } from "react-router-dom";
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

useEffect(()=> {
    async function loadMovies(){

        
    const db = firebase.firestore();
    db.collection("movie")
        .get()
        .then((querySnapshot) => {
            const arrmovies= [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                arrmovies.push(doc.data())
                console.log(doc.id, " => ", doc.data());
            });
            setMovies(arrmovies)
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }
    loadMovies();
}, [])
    return (
    <>
    <Header />
    

    <StyledContainer>
            <Title>Movie Now</Title>
            <StyledRow>

            {movies.map((movie) =>    (
            <StyledCard key={movie.id}>
                <StyledCardImg  variant="top" src={movie.url_picture} />
                <StyledCardBody>
                    <StyledCard.Title>{movie.name}</StyledCard.Title>
                    <StyledCardText >
                    {movie.description}
                    </StyledCardText>
                    <StyledButton variant="outline-dark">Assista agora</StyledButton>
                </StyledCardBody>
                </StyledCard>
                ))}
            </StyledRow>
        </StyledContainer>
    </>);
}

export default Main;