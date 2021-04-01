import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./css/layout.css"
import Header from  "./components/Header.js"

function App() {
  return (
    // <div>
    //   < Header />
    // </div>
    <main>
    <Switch>
        <Route path="/" component={ Header } exact />
        {/* <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} /> */}
        <Route component={ Error } />
    </Switch>
</main>
  );
}

export default App;
