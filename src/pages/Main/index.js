import React, {Component} from "react";
import {Row, Col, Button,Container, Card, } from 'react-bootstrap';
class index extends Component {
    state = {};
    render() {
        return(
        <>
        <Container
            style={{
                paddingTop:50,
                display: 'flex',
                flexDirection:'column',
                alignItens: 'center',
                minWidth: 300,
            }}
            >
            <h1 style={{
                color: '#aaaa',
                marginTop: 20
            }}>Main</h1>
            <Row>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Row>
            
        </Container>
        
        </>);
    }
}

export default index;