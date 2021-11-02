import Header from './Header';
import TinderCards from './TinderCards';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    // BEM class naming convention
    <div className="app">
   

  
   <Header />
    <Router>
      <Switch>


      <Route path="/chat">
          <h1>I am at chatpage</h1>
        </Route>
        
        <Route path="/">
          <TinderCards />
        </Route>
        
      </Switch>
    
       {/* TinderCards */}
     {/* Buttons below tinder cards */}

      {/* Chats screen */}
       {/* Individual chat */}
    </Router>

    
    </div>
  );
}

export default App;
