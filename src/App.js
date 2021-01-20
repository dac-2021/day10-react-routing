import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/**
 * http://localhost:3000/
 * http://localhost:3000/page1
 * http://localhost:3000/page2
 * http://localhost:3000/page3
 */
function App() {
  return (
    <Router>
      {/** Navigation Link */}
      <Link to="/">Home</Link> | <Link to="/page1">Page1</Link> |{" "}
      <Link to="/page2">Page2</Link> |<Link to="/page3"> Page3</Link>
      {/** Routes Here */}
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
  return <div>Default Page As Seprate Component</div>;
}

function Page1() {
  return <div>Page 1</div>;
}

function Page2() {
  return <div>Page2</div>;
}

function Page3() {
  return <div>Page3</div>;
}

export default App;
