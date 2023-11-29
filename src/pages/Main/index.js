import React, {Component} from "react";
import {Row, Col, Button,Container, Card, } from 'react-bootstrap';
class Main extends Component {
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
                marginTop: 20,
                fontFamily: "ubuntu",
                alignItens: 'center',
                alignSelf: 'center',
            }}>Movie Now</h1>
            <Row style={{
                display: 'flex', justifyContent: 'center'
            }}>
            <Card style={{ width: 250, margin : 10 }}>
                <Card.Img style={{
                    width: 180,
                    height: 180,
                    alignSelf: 'center',
                    paddingTop:20,
                    cursor: 'pointer',
                }} variant="top" src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*JzDt_DAFQRA_uXMzSAkM7g.jpeg" />
                <Card.Body style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <Card.Title>Insecure </Card.Title>
                    <Card.Text style={{
                        fontSize: 20
                    }}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button style={{
                        width:200
                    }} variant="outline-dark">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Row>
            
        </Container>
        
        </>);
    }
}

export default Main;