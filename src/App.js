import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/Pages/About/About';
import Portfolio from './Components/Pages/Portfolio';
import Contact from './Components/Pages/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>  
        <Switch>
        <Route exact path='/About' component={About} />
          <Route path='/Portfolio' component={Portfolio} />
          <Route path='/Contact' component={Contact} />
        </Switch>
   
    </Router>
  </>
  );
}

export default App;
