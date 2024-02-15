import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <> 
            <h1>Error 404: Page not found.</h1><br />
            <Link to="/">Nazad na početnu</Link>    
        </>
    )
}

export default ErrorPage;