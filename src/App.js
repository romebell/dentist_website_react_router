import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';
import WidgetShow from './WidgetShow';
import Invisalign from './Invisalign';
import SmileGallery from './SmileGallery';
import NewPatients from './NewPatients';

function App() {
  const procedures = [
    "Deep Cleaning",
    "Oral Surgery",
    "Root Canal",
    "Crown",
    "Implants",
    "Fillings"
  ];
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/procedures">See our Procedures</Link>{' '}
          <Link to="/contact">Contact Us!</Link>{' '}
          <Link to="/invisalign">Invisalign</Link>{' '}
          <Link to="/smile-gallery">Smile Gallery</Link>{' '}
          <Link to="/new-patients">New Patients</Link>{' '}
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/procedures" render={() => <Procedures procedures={procedures} />} />
        <Route path="/contact" component={Contact} />
        <Route path="/widgets/:id" render={(props) => <WidgetShow procedures={procedures} {...props} />} />
        <Route path="/invisalign" component={Invisalign} />
        <Route path="/smile-gallery" component={SmileGallery} />
        <Route path="/new-patients" component={NewPatients} />
      </div>
    </Router>
    
  );
}

export default App;
