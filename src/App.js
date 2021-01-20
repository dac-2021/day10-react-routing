import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

/**
 * http://localhost:3000/
 * http://localhost:3000/page1
 * http://localhost:3000/page2
 * http://localhost:3000/page3
 */
function App() {
  return (
    <Router>
      <Route exact path="/">
        <div>Default Page</div>
      </Route>

      <Route path="/page1">
        <div>Page 1</div>
      </Route>

      <Route path="/page2">
        <div>Page 2</div>
      </Route>

      <Route path="/page3">
        <div>Page 3</div>
      </Route>
    </Router>
  );
}

export default App;
