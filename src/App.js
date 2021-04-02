import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./css/layout.css"
import Header from "./components/Header.js"
import About from "./components/About.js"
import Works from "./components/Works.js"
import Contact from "./components/Contact.js"
import Navbar from "./components/Navbar.js"


function App() {
  return (
    // <div>
    //   < Header />
    // </div>
    //     <main>
    //     <Switch>
    //         <Route path="/" component={ Header } exact />

    //         {/* <Route path="/about" component={About} />
    //         <Route path="/shop" component={Shop} /> */}
    //         <Route component={ Error } />
    //     </Switch>
    // </main>

    <BrowserRouter>
   
      <div >
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
