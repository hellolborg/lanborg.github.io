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
import { HashRouter, BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <HashRouter>
            <Route exact path="/lanborg.github.io" element={<Portfolio />}/>
            <Route exact path="/lanborg.github.io/portfolio" element={<Portfolio />}/>
            <Route exact path="/lanborg.github.io/fxtrade" element={<Fxtrade />}/>
            <Route exact path="/lanborg.github.io/oandalive" element={<Oandalive />}/>
            <Route exact path="/lanborg.github.io/cbc" element={<Cbc />}/>
            <Route exact path="/lanborg.github.io/fox" element={<Fox />}/>
            <Route exact path="/lanborg.github.io/pantryyumyums" element={<Pantryyumyums />}/>
            <Route exact path="/lanborg.github.io/about" element={<About />} />
          </HashRouter>
        </main>
        <Waves />
        <Tree />
      </div>
    </Router>
  );
}

export default App;
