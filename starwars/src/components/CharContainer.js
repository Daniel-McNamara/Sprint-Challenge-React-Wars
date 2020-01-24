import React from 'react';
import CharCard from './CharCard';
import { Container, Row} from 'reactstrap';

function CharContainer(props) {
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

export default CharContainer; 