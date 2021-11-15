import img1 from './images/image 2.png';
import img2 from './images/Rectangle 15.png';
import img3 from './images/1.png';
import { Link } from "react-router-dom";



const Home = () => {
    return ( 
     <div className="article">
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
            </div>
                <h2>All articles</h2>
          <div className="container">
            <div className="first-column">
              <div className="block">
              <Link to="/аrticle"><img src={img2}/></Link>
                <p>
                Here are some things you 
                <br/>should know regarding how 
                <br/>we work
                </p>
              </div>
              <div className="block">
                <Link to="/аrticle"><img src={img2}/></Link>
                <p>
                Here are some things you 
                <br/>should know regarding how 
                <br/>we work
                </p>
              </div>
              <div className="block">
                <Link to="/аrticle"><img src={img2}/></Link>
                <p>
                Here are some things you 
                <br/>should know regarding how 
                <br/>we work
                </p>
              </div>
              <div className="block">
              <Link to="/аrticle"><img src={img2}/></Link>
                <p>
                Here are some things you 
                <br/>should know regarding how 
                <br/>we work
                </p>
              </div>
              <div className="block">
                <Link to="/аrticle"><img src={img2}/></Link>
                <p>
                Here are some things you 
                <br/>should know regarding how 
                <br/>we work
                </p>
              </div>
              <div className="block">
                <Link to="/аrticle"><img src={img2}/></Link>
                <p>
                Here are some things you 
                <br/>should know regarding how 
                <br/>we work
                </p>
              </div>
            </div>
            <div className="second-column">
              <div className="block">
                <Link to="/аrticle"><img src={img2}/></Link>
                <p>
                Here are some things you 
                <br/>should know regarding how 
                <br/>we work
                </p>
              </div>
              <div className="block">
                <Link to="/аrticle"><img src={img2}/></Link>
                <p>
                Here are some things you 
                <br/>should know regarding how 
                <br/>we work
                </p>
              </div>
              <div className="block">
                <Link to="/аrticle"><img src={img2}/></Link>
                <p>
                Here are some things you 
                <br/>should know regarding how 
                <br/>we work
                </p>
              </div>
              <div className="block">
                <Link to="/аrticle"><img src={img2}/></Link>
                <p>
                Here are some things you 
                <br/>should know regarding how 
                <br/>we work
                </p>
              </div>
              <div className="block">
                <Link to="/аrticle"><img src={img2}/></Link>
                <p>
                Here are some things you 
                <br/>should know regarding how 
                <br/>we work
                </p>
              </div>
              <div className="block">
                <Link to="/аrticle"><img src={img2}/></Link>
                <p>
                Here are some things you 
                <br/>should know regarding how 
                <br/>we work
                </p>
              </div>
            </div>
        </div>
       <div className="wrap">
          <div className="container-1">
            <a href="#">Digital product design</a>
            <a href="#">Remote work</a>
            <a href="#">UX design</a>
            <a href="#">Distributed teams</a>
            <a href="#">Creativity </a>
            <a href="#">Strategy</a>
            <a href="#">Suspense</a>
            <a href="#">Growth</a>
          </div>
        </div>
      <div className="info">
           <img className="last-photo" src={img3}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis eu 
             <br/>velit tempus erat egestas efficitur. In hac habitasse 
             <br/>platea dictumst.  Fusce a nunc eget ligula suscipit finibus.</p>
           <div className="social-media">
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">RSS</a>
              <p>© 2012–2020 Nordic Rose Co. 
              <br/>All rights reserved. </p>
           </div>
       </div>
    </div>
     );
}
 
export default Home;