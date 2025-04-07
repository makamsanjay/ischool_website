//This is the subsection called graduate degress in the section degress.
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../components/degree.css'

function GradSection({ programs, certificates }) {
  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Graduate Degrees
      </Typography>
      {programs.map((program, index) => (
        <Accordion key={`grad-${index}`}>
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
      
      {certificates?.length > 0 && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Graduate Advanced Certificates</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {certificates.map((certificate, index) => (
                <li key={index}>{certificate}</li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
}

export default GradSection;