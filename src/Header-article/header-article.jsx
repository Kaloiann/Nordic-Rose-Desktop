import img1 from "../images/2.png"
import "../Header-article/header-article.scss"

const HeaderAr = () => {
    return ( 
    <div className="container-5">
        <h1>A few words about this blog 
            <br/>platform, Ghost, and how this 
            <br/>site was made
        </h1>
        <p>
            Why Ghost (& Figma) instead of Medium, WordPress 
        <br/>or other options?
        </p>
        <img className="photo-5" src={img1}/>
    </div> 
    );
}
 
export default HeaderAr;