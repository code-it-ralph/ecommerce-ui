import { Container, Row, Col } from 'react-bootstrap';
import CartHeader from '../components/CartHeader';
import CartMain from '../components/CartMain';
import CartBasket from '../components/CartBasket';
import CartApp from '../components/CartApp';

export default function Cart() {

    return (
        <Container>
            {/* <Row>
                <CartHeader />
            </Row>

            <Row>
                <Col>
                    <CartMain />
                </Col>

                <Col>
                    <CartBasket />
                </Col>
            </Row> */}
            <CartApp />
        </Container>
    );
};
