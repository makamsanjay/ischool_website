//Here in this code i have used diff accrodion for each sub section beacuse each sub section has differnent type of data 
//so i have create customn accordion based on the data as you see in the website/code.
//Got component from MUI.
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
import Link from '@mui/material/Link';
import '../components/resources.css';

function ResourcesList({ resources }) {
  return (
    <>
      <Typography paragraph sx={{ mb: 4 }}>
        {resources.subTitle}
      </Typography>

      {/* Study Abroad Section */}
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            {resources.studyAbroad.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>{resources.studyAbroad.description}</Typography>
          <Divider sx={{ my: 2 }} />
          
          {resources.studyAbroad.places.map((place, index) => (
            <div key={`place-${index}`}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {place.nameOfPlace}
              </Typography>
              <Typography paragraph>{place.description}</Typography>
              {index < resources.studyAbroad.places.length - 1 && <Divider sx={{ my: 2 }} />}
            </div>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Student Services Section */}
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            {resources.studentServices.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Academic Advisors */}
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {resources.studentServices.academicAdvisors.title}
          </Typography>
          <Typography paragraph>{resources.studentServices.academicAdvisors.description}</Typography>
          
          {/* FAQ Link */}
          {resources.studentServices.academicAdvisors.faq && (
            <Link 
              href={resources.studentServices.academicAdvisors.faq.contentHref} 
              target="_blank" 
              rel="noopener"
              sx={{ display: 'block', mb: 2 }}
            >
              {resources.studentServices.academicAdvisors.faq.title}
            </Link>
          )}
          <Divider sx={{ my: 2 }} />

          {/* Professional Advisors */}
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {resources.studentServices.professonalAdvisors.title}
          </Typography>
          <List dense>
            {resources.studentServices.professonalAdvisors.advisorInformation.map((advisor, index) => (
              <ListItem key={`advisor-${index}`}>
                <ListItemText
                  primary={advisor.name}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" display="block">
                        {advisor.department}
                      </Typography>
                      <Typography component="span" variant="body2">
                        {advisor.email}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />

          {/* Faculty Advisors */}
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {resources.studentServices.facultyAdvisors.title}
          </Typography>
          <Typography paragraph>{resources.studentServices.facultyAdvisors.description}</Typography>
          <Divider sx={{ my: 2 }} />

          {/* Minor Advisors */}
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {resources.studentServices.istMinorAdvising.title}
          </Typography>
          <List dense>
            {resources.studentServices.istMinorAdvising.minorAdvisorInformation.map((minor, index) => (
              <ListItem key={`minor-${index}`}>
                <ListItemText
                  primary={minor.title}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" display="block">
                        {minor.advisor}
                      </Typography>
                      <Typography component="span" variant="body2">
                        {minor.email}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      {/* Tutors and Lab Information */}
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            {resources.tutorsAndLabInformation.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>{resources.tutorsAndLabInformation.description}</Typography>
          {resources.tutorsAndLabInformation.tutoringLabHoursLink && (
            <Link 
              href={resources.tutorsAndLabInformation.tutoringLabHoursLink} 
              target="_blank" 
              rel="noopener"
              sx={{ mt: 2, display: 'block' }}
            >
              Tutoring Lab Hours
            </Link>
          )}
        </AccordionDetails>
      </Accordion>

      {/* Student Ambassadors */}
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            {resources.studentAmbassadors.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {resources.studentAmbassadors.ambassadorsImageSource && (
            <img 
              src={resources.studentAmbassadors.ambassadorsImageSource} 
              alt="Student Ambassadors" 
              style={{ maxWidth: '100%', marginBottom: '20px' }}
            />
          )}
          
          {resources.studentAmbassadors.subSectionContent.map((section, index) => (
            <div key={`ambassador-section-${index}`}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: index > 0 ? 2 : 0 }}>
                {section.title}
              </Typography>
              <Typography paragraph>{section.description}</Typography>
              {index < resources.studentAmbassadors.subSectionContent.length - 1 && <Divider sx={{ my: 2 }} />}
            </div>
          ))}
          
          {resources.studentAmbassadors.applicationFormLink && (
            <Link 
              href={resources.studentAmbassadors.applicationFormLink} 
              target="_blank" 
              rel="noopener"
              sx={{ mt: 2, display: 'block' }}
            >
              Apply Now
            </Link>
          )}
          
          {resources.studentAmbassadors.note && (
            <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
              {resources.studentAmbassadors.note}
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>

      {/* Forms */}
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            Forms
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Graduate Forms */}
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Graduate Forms
          </Typography>
          <List dense>
            {resources.forms.graduateForms.map((form, index) => (
              <ListItem key={`grad-form-${index}`}>
                <Link 
                  href={form.href} 
                  target="_blank" 
                  rel="noopener"
                >
                  {form.formName}
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          
          {/* Undergraduate Forms */}
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Undergraduate Forms
          </Typography>
          <List dense>
            {resources.forms.undergraduateForms.map((form, index) => (
              <ListItem key={`undergrad-form-${index}`}>
                <Link 
                  href={form.href} 
                  target="_blank" 
                  rel="noopener"
                >
                  {form.formName}
                </Link>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      {/* Co-op Enrollment */}
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            {resources.coopEnrollment.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {resources.coopEnrollment.enrollmentInformationContent.map((section, index) => (
            <div key={`coop-section-${index}`}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: index > 0 ? 2 : 0 }}>
                {section.title}
              </Typography>
              <Typography paragraph>{section.description}</Typography>
              {index < resources.coopEnrollment.enrollmentInformationContent.length - 1 && <Divider sx={{ my: 2 }} />}
            </div>
          ))}
          
          {resources.coopEnrollment.RITJobZoneGuidelink && (
            <Link 
              href={resources.coopEnrollment.RITJobZoneGuidelink} 
              target="_blank" 
              rel="noopener"
              sx={{ mt: 2, display: 'block' }}
            >
              RIT JobZone Guide
            </Link>
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default ResourcesList;