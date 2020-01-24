import React from 'react';
import CharCard from './Card';
import { container, Row} from 'reactstrap';

function CardContainer(props) {
    return (
        <Container>
            <Row>
                {
                    props.parentData.map(item => {
                        return <CharCard key={item.name} char={item}/>
                    })
                }
            </Row>
        </Container>
    )
}

export default CardContainer; 