import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Create } from './components/create';
import {Read} from './components/read';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Navbar, Nav} from 'react-bootstrap';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Content</Nav.Link>
            <Nav.Link href="/header">Header</Nav.Link>
            <Nav.Link href="/footer">Footer</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
      </Navbar>

    <br/>

    <Switch>
      <Route path="/" component={Content} exact/>
      <Route path="/header" component={Header} exact/>
      <Route path="/footer" component={Footer} exact/>
      <Route path="/read" component={Read} exact/>
      <Route path="/create" component={Create} exaxt/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
