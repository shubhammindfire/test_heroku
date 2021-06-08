import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import TestComponent from "./components/TestComponent";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomeComponent} />
                <Route path="/test" exact component={TestComponent} />
            </Switch>
        </Router>
    );
}

export default App;
