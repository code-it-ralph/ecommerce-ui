/* Bootstrap */
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Banner ({data}) {

    const { title, content, destination, label } = data;

    return (
        <Row>
            <Col className="p-5">
                <h1>{title}</h1>
                <p id='banner-content'>{content}</p>
                <Link to={destination} id="home-link">{label}</Link>
            </Col>
        </Row>
    )
}

