import img6 from "../images/Rectangle 15.png"
import "../News-article/news-article.scss"

const News = () => {
    return ( 
        <div className="container-7">
            <hr/>
                <h1>What to read next</h1>
            <div className="news">
                <div className="first-column">
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
                <div className="second-column">
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
                <div className="third-column">    
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
     );
}
 
export default News;