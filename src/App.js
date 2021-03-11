import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/team/:id">
            <Details />
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="*">
            <h1> found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
