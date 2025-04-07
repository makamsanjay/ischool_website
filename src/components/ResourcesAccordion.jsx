import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ResourcesList from './ResourcesList';
import getData from '../util/GetData';
import '../components/resources.css';

function ResourcesAccordion() {
  const [loaded, setLoaded] = useState(false);
  const [resourcesData, setResourcesData] = useState(null);

  useEffect(() => {
    getData('resources/')
      .then((json) => {
        setResourcesData(json);
        setLoaded(true);
      });
  }, []);

  if (!loaded) return (
    <div className="resources-section">
      <Typography variant="h4">Loading resources...</Typography>
    </div>
  );

  return (
    <div className="resources-section">
      <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
        <Typography variant="h3" gutterBottom className="resources-title">
          Student Resources
        </Typography>
        {resourcesData && <ResourcesList resources={resourcesData} />}
      </Box>
    </div>
  );
}

export default ResourcesAccordion;