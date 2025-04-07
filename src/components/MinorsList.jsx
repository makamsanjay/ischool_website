//This is the minors list section where data goes for the minors.
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import CourseModal from './CourseModa'; 
import '../components/minors.css';

function MinorsList({ minors }) {
  return (
    <>
      {minors.map((minor, index) => (
        <Accordion key={`minor-${index}`} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
              {minor.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>{minor.description}</Typography>
            
            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold' }}>
              Required Courses:
            </Typography>
            <List dense>
              {minor.courses.map((course, i) => {
                const courseId = typeof course === 'string' ? course : course.courseID;
                const courseTitle = typeof course === 'string' ? course : course.title;
                const courseDescription = typeof course === 'string' ? "" : course.text;
                
                return (
                  <ListItem key={i}>
                    <CourseModal 
                      courseID={courseId}
                      title={courseTitle}
                      description={courseDescription}
                    />
                  </ListItem>
                );
              })}
            </List>
            
            {minor.note && (
              <>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" color="text.secondary">
                  <strong>Note:</strong> {minor.note}
                </Typography>
              </>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

export default MinorsList;