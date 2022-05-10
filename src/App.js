import AddArticle from "./components/AddArticle";
import Articles from "./components/Articles";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Article from "./components/Article";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/signin" element={<Login></Login>}></Route>
          <Route path="/article/:id" element={<Article></Article>}></Route>

          <Route
            path="/"
            element={
              <div className="row">
                <div className="col-md-8">
                  <Articles></Articles>
                </div>
                <div className="col-md-4">
                  <AddArticle></AddArticle>
                </div>
              </div>
            }
          >
            {" "}
          </Route>
        </Routes>

        <Navbar></Navbar>
      </Router>
    </div>
  );
}

export default App;
