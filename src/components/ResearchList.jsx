//This is the section where Research section cide goes from and i ahve wrapped accordion using accordion twice to minimize the content as you see in the website.

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import '../components/research.css';

function ResearchList({ research }) {
  return (
    <>
 {/* By Interest Area */}
<Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
  By Interest Area
</Typography>
<Accordion sx={{ mb: 2 }}>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
      Research by Interest Areas
    </Typography>
  </AccordionSummary>
  <AccordionDetails>
    <List dense>
      {research.byInterestArea.map((area, index) => (
        <Accordion key={`area-${index}`} sx={{ mb: 1, boxShadow: 'none' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">
              {area.areaName}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              {area.citations.map((citation, i) => (
                <ListItem key={`citation-${i}`} sx={{ pl: 4 }}>
                  <ListItemText 
                    primary={citation} 
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </List>
  </AccordionDetails>
</Accordion>
      <Divider sx={{ my: 4 }} />

     {/* By Faculty */}
<Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
  By Faculty
</Typography>
<Accordion sx={{ mb: 2 }}>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
      Faculty Research Publications
    </Typography>
  </AccordionSummary>
  <AccordionDetails>
    <List dense>
      {research.byFaculty.map((faculty, index) => (
        <Accordion key={`faculty-${index}`} sx={{ mb: 1, boxShadow: 'none' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">
              {faculty.facultyName}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              {faculty.citations.map((citation, i) => (
                <ListItem key={`faculty-citation-${i}`} sx={{ pl: 4 }}>
                  <ListItemText 
                    primary={citation} 
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </List>
  </AccordionDetails>
</Accordion>
    </>
  );
}

export default ResearchList;