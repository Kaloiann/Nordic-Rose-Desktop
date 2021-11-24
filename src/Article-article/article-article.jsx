import img2 from "../images/image 3.png"
import img3 from "../images/v1.png"
import img4 from "../images/v2.png"
import img5 from "../images/5.png"
import "../Article-article/article-article.scss"


const ArticleAr = () => {
    return ( 
        <div className="container-6">
             <hr />
            <div className="profile">
                <div className="info">
                    <img className="profile-photo" src={img2} />
                    <p> Mika MAtikainen
                    <br/>Apr 15, 2020 · 4 min read
                    </p>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com/"><img src={img3} className="facebook" /></a>
                    <a href="https://twitter.com/"><img src={img4} className="twitter" /></a>
                </div>
            </div>
               <div className="text">
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
                <div className="text-2">
                    <img className="photo-2" src={img5} />
                    <div className="after-image">
                        Image caption centered this way and I’ll make this a bit longer 
                        <br/>to indicate the amount of line-height. 
                    </div>
            
                    <p>
                    Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad 
                    <br/>litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. 
                    <br/>
                    <br/>In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo 
                    <br/>lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi 
                    <br/>efficitur auctor metus, id mollis lorem pellentesque id. Nullam 
                    <br/>posuere maximus dui et fringilla. Nulla non volutpat leo.   
                    </p>
                    <ul>A list looks like this: </ul>
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
                </div>
                <div className="profile-2">
                    <div className="social-media2">
                        <div className="facebook2 social-button">
                            <a href="#"><img src={img3}/></a>
                            <p>Share on Facebook</p>
                        </div>
                        <div className="twitter2 social-button">
                            <a href="#"><img  src={img4}/></a>
                            <p>Share on Twitter</p>
                        </div>
                    </div>
                    <div className="tags">
                    <p>Tags:
                    <a href="#">product design,</a>
                    <a href="#"> culture</a>
                    </p>
                    <br/>
                    <hr/>
                    </div>
                    <div className="profile-3">
                        <img className="profile-photo2" src={img2}/>
                        <p>
                            Mika Matikainen is a Design Founder & Advisor, Berlin School of Creative Leadership 
                            Executive MBA participant, 
                            Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.  
                        </p>
                    </div>
                </div>
        </div>
     );
}
 
export default ArticleAr;