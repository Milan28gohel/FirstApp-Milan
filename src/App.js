import './App.css';
import RootContainer from './Container/RootContainer';
import {BrowserRouter as Router,Link,Switch,Route,} from "react-router-dom";
import PhotoContainer from './Container/PhotoContainer';  

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Post Listing</h1>
      
      <div><h1><Link to ="/PhotoContainer">Photos</Link></h1></div>   
      <Switch>
        <Route exact path ="/">
        <RootContainer/>
        </Route>
        <Route exact path="/PhotoContainer"> 
        <PhotoContainer />
        </Route>
        </Switch>
      <div>
      </div>
    </div>
    </Router>  
  );
}

export default App;
