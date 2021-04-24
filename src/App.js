import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/Pages/About/About';
import Portfolio from './Components/Pages/Portfolio/Portfolio';
import Contact from './Components/Pages/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/Header/NavBar';


function App() {
  return (
    <>
    <div><NavBar/></div>
    <Router>  
        <Switch>
        <Route exact path='/' component={About} />
          <Route path='/Portfolio' component={Portfolio} />
          <Route path='/Contact' component={Contact} />
        
        </Switch>
   
    </Router>
  </>
  );
}

export default App;
