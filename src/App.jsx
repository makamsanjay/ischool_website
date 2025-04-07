//This is the main app.jsx file where all the imports happens and also about section, nav ba, side bar goes from.
import React from 'react';
import { useState, useEffect } from 'react';
import PeopleTabs from './components/peopleTabs.jsx';
import DegreesAccordion from './components/DegreesAccordion.jsx';
import MinorsAccordion from './components/MinorsAccordion.jsx';
import EmploymentTabs from './components/EmploymentTabs.jsx';
import ResourcesAccordion from './components/ResourcesAccordion.jsx';
import Footer from './components/footer.jsx';
import ResearchAccordion from './components/ResearchAccordion.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import getData from './util/GetData.js';

const App = () => {
  const [loadAbout, setLoadAbout] = useState(false);
  const [aboutObj, setAboutObj] = useState(null);

  useEffect(() => {
    getData('about/')
      .then((json) => {
        console.log('worked', json);
        setAboutObj(json);
        setLoadAbout(true);
      })
  }, []);

  if (!loadAbout) return (
    <h1 className="loading-message">Loading...</h1>
  );
  

  return (
    <div className="app-container">
      <nav className="orange-navbar">
    <div className="navbar-title">
      <a href= "https://www.rit.edu" className="nav-link" target="_blank">
      <img src="https://res.cloudinary.com/dw3ryikmr/image/upload/v1743989137/rit_logo-removebg-preview_ubcbd1.png" alt="RIT Logo" className="navbar-logo" />
      </a>
    </div>
    <div className="navbar-links">
      <a href="https://www.rit.edu/computing/news" className="nav-link" target="_blank" >News</a>
      <a href="https://rit.edu" className="nav-link" target="_blank" >My RIT</a>
      <a href="https://www.rit.edu/computing/directory" className="nav-link" target="_blank" >Directory</a>
    </div>
  </nav>
      
      <div className="app-content">
        <div className="sidebar">
          <h2 className="sidebar-title">iSchool</h2>
          <div className="sidebar-section">
            <ul className="sidebar-list">
              <li><a href="#about">About</a></li>
              <li><a href="#degrees">Degrees</a></li>
              <li><a href='#minors'>Minors</a></li>
              <li><a href="#employment">Employment</a></li>
              <li><a href="#people">People</a></li>
              <li><a href="#resources">Resources</a></li>
              <li><a href="#research">Research</a></li>
              <li><a href="#apply">Apply</a></li>
            </ul>
          </div>
        </div>
        
        <div className="main-content">
        <section id="about">
  <div className='about-container'>
    <div className="about-content">
      <h3 className="about-title">"{aboutObj.title}"</h3>
      <p className="about-description">{aboutObj.description}</p>
      <div className='about-quote'>
        <blockquote>{aboutObj.quote}</blockquote>
        <cite>— {aboutObj.quoteAuthor}</cite>
      </div>
    </div>
  </div>
</section>

          <hr id="degrees"/>
          <DegreesAccordion/>
          <hr id="minors"/>
          <MinorsAccordion/>
          <hr id="employment"/>
          <EmploymentTabs/>
          <hr id="people"/>
          <PeopleTabs/>
          <hr id="resources"/>
          <ResourcesAccordion/>
          <hr id="research"/>
          <ResearchAccordion/>
          <hr id='apply'/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App;