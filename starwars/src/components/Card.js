import React from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Col
  } from "reactstrap";

function CharCard(props) {
    return (
        <Col xs="6" med="4" xl="3">
            <Card>
                <CardBody>
                    <CardTitle>{props.char.name}</CardTitle>
                    {/* <CardText>{}</CardText> */}
                    <CardSubtitle>{props.char.birth_year}</CardSubtitle>
                    <CardSubtitle>{props.char.height}</CardSubtitle>
                    <CardSubtitle>{props.char.mass}</CardSubtitle>
                    {/* <Button>Button</Button> */}
                </CardBody>
            </Card>
        </Col>
    )
}

export default CharCard 