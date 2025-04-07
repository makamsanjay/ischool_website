import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ResearchList from './ResearchList';
import getData from '../util/GetData';
import '../components/research.css';

function ResearchAccordion() {
  const [loaded, setLoaded] = useState(false);
  const [researchData, setResearchData] = useState(null);

  useEffect(() => {
    getData('research/')
      .then((json) => {
        setResearchData(json);
        setLoaded(true);
      });
  }, []);

  if (!loaded) return (
    <div className="research-section">
      <Typography variant="h4">Loading research...</Typography>
    </div>
  );

  return (
    <div className="research-section">
      <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
        <Typography variant="h3" gutterBottom className="research-title">
          Research Publications
        </Typography>
        {researchData && <ResearchList research={researchData} />}
      </Box>
    </div>
  );
}

export default ResearchAccordion;