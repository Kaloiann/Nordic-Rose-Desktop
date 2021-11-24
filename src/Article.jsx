import HeaderAr from "./Header-article/header-article"
import ArticleAr from "./Article-article/article-article.jsx"
import News from "./News-article/news-article"
import Footer from "./Footer/footer"

const Article = () => {
    return (
      <div className="wrap-article">   
            <HeaderAr/>
            <ArticleAr/>
            <News/>
            <Footer/>
       </div>
     
      

     );
}
 
export default Article;