import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col
  } from "reactstrap";
  import './StarWars.css';

function CharCard(props) {
    return (
        <Col xs="12" sm="6" xl="4">
            <Card body className='charCard'>
                <CardBody>
                    <CardTitle>{props.char.name}</CardTitle>
                    <CardSubtitle>Birth Year: {props.char.birth_year}</CardSubtitle>
                    <CardSubtitle>Height: {props.char.height} cm</CardSubtitle>
                    <CardSubtitle>Mass: {props.char.mass} kg</CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CharCard