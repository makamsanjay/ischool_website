import { useState, useEffect } from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import PeopleGroup from '../components/peopleGroup.jsx';

import getData from '../util/GetData.js';
import './people.css'

function PeopleTabs() {
  const [loaded, setLoaded] = useState(false);
  const [people, setPeople] = useState();
  
  useEffect (()=>{
    getData('people/')
       .then( (json) => {
        console.log('people got', json);
        setPeople(json);
        setLoaded(true);
       })
  }, []);

  if (!loaded) return (
    <h1>loading people...</h1>
)


  return (
    <>
    <h2>{people.title}</h2>
    <h5>{people.subTitle}</h5>
    <Tabs
      defaultActiveKey="fac"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="fac" title="Faculty">
        <PeopleGroup title='' pepGroup={people.faculty}/>
      </Tab>
      <Tab eventKey="staff" title="Staff">
      <PeopleGroup title='' pepGroup={people.staff}/>
      </Tab>
    </Tabs>
    </>
  );
}

export default PeopleTabs;