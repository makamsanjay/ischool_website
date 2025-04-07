import { useState, useEffect } from 'react';
import IntroductionSection from './introductionSection.jsx';
import ListSection from '../components/listSection.jsx';
import CoopTable from '../components/coopTable.jsx';
import EmploymentTable from '../components/professionalTable.jsx';
import getData from '../util/GetData.js';
import './employment.css';

function EmploymentTabs() {
  const [loaded, setLoaded] = useState(false);
  const [employmentData, setEmploymentData] = useState();
  
  useEffect(() => {
    getData('employment/')
      .then((json) => {
        console.log('employment data got', json);
        setEmploymentData(json);
        setLoaded(true);
      })
  }, []);

  if (!loaded) return (
    <div className="employment-section">
      <h1>Loading employment information...</h1>
    </div>
  );

  return (
    <div className="employment-section">
      {/* Introduction Section */}
      <div className="introduction-section">
        <h4 className="section-title">{employmentData.introduction.title}</h4>
        <IntroductionSection introContent={employmentData.introduction.content} />
      </div>
      
      {/* Statistics Section */}
      <div className="stats-section">
  <h3 className="stats-title">{employmentData.degreeStatistics.title}</h3>
  <div className="stats-grid">
    {employmentData.degreeStatistics.statistics.map((stat, index) => {
      const descriptionParts = stat.description.split('(');
      const mainText = descriptionParts[0].trim();
      const source = descriptionParts[1] ? `(${descriptionParts[1].trim()}` : '';
      
      return (
        <div key={index} className="stat-card">
          <div className="stat-value">{stat.value}</div>
          <div className="stat-description">
            {mainText} <span className="stat-source">{source}</span>
          </div>
        </div>
      );
    })}
  </div>
</div>

      {/* Employers & Careers Section. */}
      <div className="lists-section">
        <div className="lists-container">
          <div className="employers-list employment-card">
            <ListSection 
              title={employmentData.employers.title} 
              items={employmentData.employers.employerNames} 
            />
          </div>
          
          <div className="careers-list c-card">
            <ListSection 
              title={employmentData.careers.title} 
              items={employmentData.careers.careerNames} 
            />
          </div>
        </div>
      </div>
      
      {/* Co-op Table Section */}
      {employmentData.coopTable && (
        <div className="table-section coop-table">
          <CoopTable 
            title={employmentData.coopTable.title} 
            coopData={employmentData.coopTable.coopInformation} 
          />
        </div>
      )}
      
      {/* Employment Table Section */}
      {employmentData.employmentTable && (
        <div className="table-section employment-table">
          <EmploymentTable 
            employmentTable={employmentData.employmentTable} 
          />
        </div>
      )}
    </div>
  );
}

export default EmploymentTabs;