import {Link} from "react-router-dom"

const Header = () => {
    return ( 
        <>
        
        <h1>Which Dog Breed Are You?</h1>
        <h3>(Based on totally random things)</h3>

        <nav>
        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>
        </nav>
        </>
     );
}
 
export default Header;