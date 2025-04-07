//it is where the data goes from the degress accordion and showup on degress section on the project
import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UgradSection from './UgradSection';
import GradSection from './GradSection';
import getData from '../util/GetData';
import '../components/degree.css';

function DegreesAccordion() {
  const [loaded, setLoaded] = useState(false);
  const [degrees, setDegrees] = useState({ 
    undergraduate: [], 
    graduate: [] 
  });

  useEffect(() => {
    getData('degrees/')
      .then((json) => {
        setDegrees(json);
        setLoaded(true);
      });
  }, []);

  if (!loaded) return (
    <div className="degrees-section">
      <Typography variant="h4">Loading...</Typography>
    </div>
  );

  const certificatesItem = degrees.graduate.find(item => item.degreeName === "graduate advanced certificates");
  const certificates = certificatesItem?.availableCertificates || [];

  const gradPrograms = degrees.graduate.filter(item => item.degreeName !== "graduate advanced certificates");

  return (
    <div className="degrees-section">
      <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
        <UgradSection programs={degrees.undergraduate} />
        <GradSection 
          programs={gradPrograms} 
          certificates={certificates} 
        />
      </Box>
    </div>
  );
}

export default DegreesAccordion;