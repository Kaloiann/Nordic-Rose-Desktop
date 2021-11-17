import img3 from '../images/1.png';
import "../Footer/footer.scss";

const Footer = () => {
    return ( 
        
        <div className="container-4">
          <div className="shrink">
            <a href="#">Digital product design</a>
            <a href="#">Remote work</a>
            <a href="#">UX design</a>
            <a href="#">Distributed teams</a>
            <a href="#">Creativity </a>
            <a href="#">Strategy</a>
            <a href="#">Suspense</a>
            <a href="#">Growth</a>
            </div>
            <div className="last-photo">
           <img  src={img3}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis eu 
             <br/>velit tempus erat egestas efficitur. In hac habitasse platea 
             <br/>dictumst.  Fusce a nunc eget ligula suscipit finibus.</p>
             </div>
           <div className="social-media">
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">RSS</a>
              <p>© 2012–2020 Nordic Rose Co. 
              <br/>All rights reserved. </p>
           </div>
       </div>
       
     );
}
 
export default Footer;