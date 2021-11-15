import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Links from './Links';
import About from './About';
import Blog from './Blog';
import Project from './Project';
import Article from './Article';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <div className="content">
        <Switch>
        <Route exact path="/"> 
            <Home />
          </Route>
        <Route path="/blog"> 
            <Blog />
          </Route>
          <Route path="/about"> 
            <About />
          </Route>
          <Route path="/links"> 
            <Links />
          </Route>
          <Route path="/project"> 
            <Project />
          </Route>
          <Route path="/аrticle">
          <Article />
        </Route>
        </Switch>
       </div>
     </div>
    </Router> 
  );
}

export default App;
