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
      <div className="row bg-dark" style={{ height: "65px" }}>
        <div className="col-3 d-flex align-items-center text-light">
          Project Book
        </div>
        <div className="col-9 d-flex align-items-center justify-content-end">
          <Link to="/">
            <button type="button" class="btn btn-outline-light">
              Home
            </button>
          </Link>
          <Link to="/page1">
            <button type="button" class="btn btn-outline-light">
              Page 1
            </button>
          </Link>
          <Link to="/page2">
            <button type="button" class="btn btn-outline-light">
              Page 2
            </button>
          </Link>
          <Link to="/page3">
            <button type="button" class="btn btn-outline-light">
              Page 3
            </button>
          </Link>
        </div>
      </div>

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
