/* Bootstrap */
import { Row, Col, Container } from 'react-bootstrap';

/* Components */
import Banner from '../components/Banner';
import Highlights from '../components/Highlights';


export default function Home() {

    const homeTop = {
        title: "Trending & Best Selling",
        content: "Read Now. Counquer tomorrow.",
        destination: "/library",
        label: "Check library"
    }

    const homeBottom = {
        title: "New Release",
        content: "The only thing that replace a book; the next book.",
        destination: "/library",
        label: "Check library"
    }

    const contentTop = {
        cont1: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/atomic-habits-template-design-3b006f560baa38629c4e4c0ee7fa0fe2.jpg?ts=1637013367",
        cont2: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/self-help-kindle-book-cover-design-template-566375e2a5b437d9712471838b31457d.jpg?ts=1636982321",
        cont3: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-and-grey-business-book-cover-design-template-82475ff2a08dbfa30498a025f2cdf479.jpg?ts=1637017582"
    }

    const contentBottom = {
        cont1: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-digital-marketing-book-cover-design-template-f0bda0743701fd05b7efc46cd6a67ae6.jpg?ts=1637017828",
        cont2: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-and-grey-business-book-cover-design-template-82475ff2a08dbfa30498a025f2cdf479.jpg?ts=1637017582",
        cont3: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/blue-entrepreneurship-book-cover-design-template-6480291630a0b8216b2f6d902e635eb7.jpg?ts=1637017798"
    }

    return (
        <div className='mt-5 mb-5'>
            <Container className='home-container-top'>
                <Row className='animate__animated animate__slideInLeft'>
                    <Col xs={12} md={3} >
                        <Banner data={homeTop} />
                    </Col>
                    <Col xs={12} md={9} >
                        <Highlights data={contentTop} />
                    </Col>
                </Row>
            </Container>

            <Container className='home-container-bot mt-4'>
                <Row className='animate__animated animate__slideInRight'>
                    <Col xs={12} md={3} >
                        <Banner data={homeBottom} />
                    </Col>
                    <Col xs={12} md={9} >
                        <Highlights data={contentBottom} />
                    </Col>
                </Row>
            </Container>
        </div >
    )
}