import Header from './Components/Header';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route>
              <Header />
              <Body />
              <Footer />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
