import { Link } from "react-router-dom";
import img1 from './images/NORDIC ROSE.png';

const Navbar = () => {
    return ( 
       <nav className="navbar">
          <Link to="/"><img className="logo" src={img1}/></Link>
           <div className="links">
              <Link to="/blog">BLOG</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/links">LINKS</Link>
              <Link to="/project">PROJECT</Link>
           </div>
        </nav>
     );
}
 
export default Navbar;