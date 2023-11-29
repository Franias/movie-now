import React from 'react';
import {Title,StyledContainer, List, StyledButton} from './styles';
function ListMovies(){
    return <StyledContainer>
        <Title>Name</Title>
        <List>
            <li>Primeiro Episodeo <StyledButton>Watch now</StyledButton></li>
        </List>
        
    </StyledContainer>
}
export default ListMovies;