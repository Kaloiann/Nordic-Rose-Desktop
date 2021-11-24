import { Link } from "react-router-dom";
import img1 from '../images/NORDIC ROSE.png';
import  "../Navigation/nav.scss";

const Navbar = () => {
    return (
        <section>
            <div className="container"> 
            <Link to="/"><img className="logo" src={img1}/></Link>
            <nav className="navbar">
                
                    <Link className="links" to="/blog">BLOG</Link>
                    <Link className="links" to="/about">ABOUT</Link>
                    <Link className="links" to="/links">LINKS</Link>
                    <Link className="links" to="/project">PROJECT</Link>
                
            </nav>
        </div>
        </section>
     );
}
 
export default Navbar;