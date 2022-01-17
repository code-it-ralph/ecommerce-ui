/* Bootstrap */
import { Row, Col, Card, Button } from 'react-bootstrap';

/* React */
import { useHistory } from 'react-router-dom';

export default function Highlights ({data}) {

    const { cont1, cont2, cont3 } = data;

    return (
        <Row className="mt-3 mb-3">

            <Col xs={12} md={4}>
                <Card className="cardHighlight p-3 stretch-link">
                    <Card.Body>
                        <img className='card-img' src={cont1} />
                    </Card.Body>
                    {/* <Button variant="secondary" className='card-btn col-3'>Read</Button> */}
                </Card>
            </Col>

            <Col xs={12} md={4}>
                <Card className="cardHighlight p-3">
                    <Card.Body>
                        <img className='card-img' src={cont2} />
                    </Card.Body>
                    {/* <Button variant="secondary" className='card-btn col-3'>Read</Button> */}
                </Card>
            </Col>

            <Col xs={12} md={4}>
                <Card className="cardHighlight p-3">
                    <Card.Body>
                        <img className='card-img' src={cont3} />
                    </Card.Body>
                    {/* <Button variant="secondary" className='card-btn col-3'>Read</Button> */}
                </Card>
            </Col>

        </Row>
    );
};