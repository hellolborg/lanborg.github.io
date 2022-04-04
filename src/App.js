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
          <HashRouter basename="/">
            <Route path="/" element={<Portfolio />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/fxtrade" element={<Fxtrade />}/>
            <Route path="/oandalive" element={<Oandalive />}/>
            <Route path="/cbc" element={<Cbc />}/>
            <Route path="/fox" element={<Fox />}/>
            <Route path="/pantryyumyums" element={<Pantryyumyums />}/>
            <Route path="/about" element={<About />} />
          </HashRouter>
        </main>
        <Waves />
        <Tree />
      </div>
    </Router>
  );
}

export default App;
