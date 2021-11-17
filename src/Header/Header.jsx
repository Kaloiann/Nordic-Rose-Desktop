import img1 from '../images/image 2.png';
import "../Header/Header.scss"

const Header = () => {
    return (
        <div className="container-2">
            <img src={img1} />
                <h1>A few words about this blog 
                    <br/>platform, Ghost, and how this 
                    <br/>site was made
                </h1>
                <p>Why Ghost (& Figma) instead of Medium,
                    <br /> WordPress or other options?
                </p>
                <div className="line">
                    <hr />
                    <h2>All articles</h2>
                </div>
        </div>
     );
}
 
export default Header;