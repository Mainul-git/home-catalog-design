import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Catalogue from './components/Catalogue/Catalogue';
function App() {
  return (
    <div className="">
     <Router>
       <Switch>
         <Route path="/catalogue">
<Catalogue></Catalogue>
         </Route>
         <Route path="/">
           <Home></Home>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
