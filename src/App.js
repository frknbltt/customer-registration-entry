import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
} from "react-router-dom";
import CustomerContextProvider from "./contexts/CustomerContext";
import RoleContextProvider from "./contexts/RoleContext";
import { CustomerEditPage } from "./pages/CustomerEditPage";
import { CustomerPage } from "./pages/CustomerPage";

const Page1 = () => {
  return <p>leeee</p>
}

function App() {
  return (
    <Router>
      <RoleContextProvider>
      <CustomerContextProvider>
      <Route exact path="/" component={CustomerPage}/>
      <Route exact path="/customer/:id" component={CustomerEditPage}/>
    </CustomerContextProvider>
    </RoleContextProvider>
    </Router>
  );
}

export default App;
