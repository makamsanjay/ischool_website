//This is a sub section in degress called undergraduate degress
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../components/degree.css'

function UgradSection({ programs }) {
  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Undergraduate Degrees
      </Typography>
      {programs.map((program, index) => (
        <Accordion key={`ug-${index}`}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{program.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>{program.description}</Typography>
            {program.concentrations?.length > 0 && (
              <>
                <Typography variant="subtitle1">Concentrations:</Typography>
                <ul>
                  {program.concentrations.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

export default UgradSection;