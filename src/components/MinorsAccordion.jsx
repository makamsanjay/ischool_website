//This is the section in the project called Minors and is is displayed in the form of accordion from MUI.
import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MinorsList from './MinorsList';
import getData from '../util/GetData';
import '../components/minors.css';

function MinorsAccordion() {
  const [loaded, setLoaded] = useState(false);
  const [minorsData, setMinorsData] = useState([]);

  useEffect(() => {
    getData('minors/')
      .then((json) => {
        setMinorsData(json.UgMinors || []);
        setLoaded(true);
      });
  }, []);

  if (!loaded) return (
    <div className="minors-section">
      <Typography variant="h4">Loading minors...</Typography>
    </div>
  );

  return (
    <div className="minors-section">
      <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
        <Typography variant="h3" gutterBottom className="minors-title">
          Minors
        </Typography>
        <MinorsList minors={minorsData} />
      </Box>
    </div>
  );
}

export default MinorsAccordion;