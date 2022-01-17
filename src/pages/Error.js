/* Bootstrap */
import { Container } from 'react-bootstrap';

/* Components */
import Banner from '../components/Banner';




export default function PageNotFound() {

    const errorData = {
        title: "Page Not Found",
        content: "The page you are looking for cannot be found.",
        destination: "/",
        label: "Go back Home"
    }
    
    // Redirect back to homepage
    return (
        <Container id="error-container" className='col-12 col-md-6 animate__animated animate__fadeIn'>
            <Banner data={errorData} />
        </Container>
    );
};
