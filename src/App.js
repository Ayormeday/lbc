import './App.css';
import { Route, Switch } from "react-router-dom";
import { MainPage } from "./component/main";
import { GlobalStyles } from "./style/GlobalStyles";

function App() {
  return (
    <div>
       <GlobalStyles />
       <Switch>
         <Route exact path= "/" component={MainPage} />
       </Switch>
    </div>
  );
}

export default App;
