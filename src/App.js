import CarPost from './components/CarPost';
import NavBar from './components/NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>

    <NavBar/>

    <BrowserRouter>
      <Switch>
        <Route path="/about" exact>
          <h1>About Page component will be here</h1>
        </Route>
        <Route path="/contact" exact>
          <h1>Contact us Page component will be here</h1>
        </Route>
        <Route path="/">
          <h1>Official website of Cohort 03</h1>
          <CarPost />
        </Route>
      </Switch>
    </BrowserRouter>

    
     
    </div>
  );
}

export default App;
