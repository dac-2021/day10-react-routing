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
        <DefaultPage />
      </Route>

      <Route path="/page1">
        <Page1 />
      </Route>

      <Route path="/page2">
        <Page2 />
      </Route>

      <Route path="/page3">
        <Page3 />
      </Route>
    </Router>
  );
}

function DefaultPage() {
  return (
    <div
      className="centerify"
      style={{ background: "tomato", color: "white" }}
    >
      Default Page As Seprate Component
    </div>
  );
}

function Page1() {
  return (
    <div
      className="centerify"
      style={{ background: "royalblue", color: "white" }}
    >
      Page 1
    </div>
  );
}

function Page2() {
  return (
    <div
      className="centerify"
      style={{ background: "gold", color: "white" }}
    >
      Page2
    </div>
  );
}

function Page3() {
  return (
    <div
      className="centerify"
      style={{ background: "silver", color: "white" }}
    >
      Page3
    </div>
  );
}

export default App;
