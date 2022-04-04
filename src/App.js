import Portfolio from "./components/Portfolio";
import Fxtrade from "./components/Fxtrade";
import Oandalive from "./components/Oandalive";
import Cbc from "./components/Cbc";
import Fox from "./components/Fox";
import Pantryyumyums from "./components/Pantryyumyums";
import About from "./components/About";
import Header from "./components/Header";
import Tree from "./components/Tree";
import Waves from "./components/Waves";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Portfolio />}/>
            <Route exact path="/lanborg.github.io/portfolio" element={<Portfolio />}/>
            <Route exact path="/fxtrade" element={<Fxtrade />}/>
            <Route exact path="/oandalive" element={<Oandalive />}/>
            <Route exact path="/cbc" element={<Cbc />}/>
            <Route exact path="/fox" element={<Fox />}/>
            <Route exact path="/pantryyumyums" element={<Pantryyumyums />}/>
            <Route exact path="/lanborg.github.io/about" element={<About />} />
          </Routes>
        </main>
        <Waves />
        <Tree />
      </div>
    </Router>
  );
}

export default App;
