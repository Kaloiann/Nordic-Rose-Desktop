import img1 from "./images/2.png"
import img2 from "./images/image 3.png"
import img3 from "./images/v1.png"
import img4 from "./images/v2.png"
import img5 from "./images/5.png"
import img6 from "./images/Rectangle 15.png"


const Article = () => {
    return (
      <div className="wrap-article">   
            <h1>A few words about this blog 
                <br/>platform, Ghost, and how this 
                <br/>site was made
            </h1>
            <p>
                Why Ghost (& Figma) instead of Medium, WordPress 
            <br/>or other options?
            </p>
            <img className="photo-article" src={img1}/>
          <div className="container-aricle">
                    <hr className="line-article" />
                <div className="profile">
                    <img src={img2} className="photo-2"/>
                    Mika MAtikainen
                    <br/>Apr 15, 2020 · 4 min read
                   <div className="social-media2">
                    <a href="https://www.facebook.com/"><img src={img3} className="facebook" /></a>
                    <a href="https://twitter.com/?lang=en"><img src={img4} className="twitter" /></a>
                   </div>  
                </div>
                <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
                <br/>tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a 
                <br/>nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.
                
                <br/>
                <br/>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per 
                <br/>inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie,
                <br/>molestie lectus eu, semper lectus. 
                </p>
                <h1>
                Next on the pipeline
                </h1>
                <p>Duis eu velit tempus erat egestas efficitur. In hac habitasse platea 
                <br/>dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra 
                <br/>quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per 
                <br/>conubia nostra, per inceptos himenaeos.
                <br/>
                <br/>
                Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam 
                <br/>posuere maximus dui et fringilla. 
                </p>
          </div>  
                <div className="photo-position">
                    <img src={img5} />
                    <br/>Image caption centered this way and I’ll make this a bit longer 
                    <br/>to indicate the amount of line-height. 
                </div>
            <div className="second-profile">
                <p>
                Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad 
                <br/>litora torquent per conubia nostra, per inceptos himenaeos. Aliquam 
                <br/>quis posuere ligula. 

                In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo 
                <br/>lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi 
                <br/>efficitur auctor metus, id mollis lorem pellentesque id. Nullam 
                <br/>posuere maximus dui et fringilla. Nulla non volutpat leo.   
                </p>
                <ul>A list looks like this:  </ul>
                <li>First item in the list</li>
                <li>Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem 
                ipsum sit amet</li>
                <li>Third item in the list</li>
                <p>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. 
                </p>
                <p>
                Thanks for reading,
                <br/>Mika
                </p>
                <div className="social-media3">
                 <img className="facebook2" src={img3}/>
                 <p>Share on Facebook</p>
                 <img className="twitter2" src={img4}/>
                 <p>Share on Twitter</p>
                </div>
                <p>Tags:<a href="#" className="tags">product design,</a>
                <a href="#" className="tags"> culture</a></p>
                    <hr/>
                <div className="profile3">
                    <img className="photo-2" src={img2}/><p>
                    Mika Matikainen is a Design Founder & Advisor, Berlin School of Creative Leadership 
                    Executive MBA participant, 
                    Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.  
                    </p>
                </div>
            </div>
            <hr/>
                <h1>What to read next</h1>
            <div className="news">
                    <div className="first-column-article">
                    <div className="block1">
                        <img src={img6}/><p>
                        Connecting artificial 
                        <br/>intelligence with digital 
                        <br/>product design
                        </p>
                    </div>
                    <div className="block1">
                        <img src={img6}/><p>
                        Connecting artificial 
                        <br/>intelligence with digital 
                        <br/>product design
                        </p>
                    </div>
                    <div className="second-column-article">
                        <div className="block1">
                        <img src={img6}/><p>
                        Connecting artificial 
                        <br/>intelligence with digital 
                        <br/>product design
                        </p>
                    </div>
                    <div className="block1">
                        <img src={img6}/><p>
                        Connecting artificial 
                        <br/>intelligence with digital 
                        <br/>product design
                        </p>
                    </div>
                    </div>
                    <div className="third-column-article">
                        <div className="block1">
                        <img src={img6}/><p>
                        Connecting artificial 
                        <br/>intelligence with digital 
                        <br/>product design
                        </p>
                    </div>
                    <div className="block1">
                        <img src={img6}/><p>
                        Connecting artificial 
                        <br/>intelligence with digital 
                        <br/>product design
                        </p>
                        </div>
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
 
export default Article;