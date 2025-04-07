import * as React from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import '../components/people.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PeopleModal(prop) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{prop.name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            {prop.name}, {prop.username}
          </Typography>
          
          {prop.title && (
            <Typography variant="subtitle1" color="text.secondary">
              {prop.title}
            </Typography>
          )}
          
          {prop.imagePath && (
            <img 
              src={prop.imagePath} 
              alt={prop.name} 
              style={{ 
                width: '100%', 
                maxHeight: '200px', 
                objectFit: 'contain',
                margin: '10px 0'
              }} 
            />
          )}
          
          {prop.tagline && prop.tagline.trim() !== "" && (
            <Typography paragraph sx={{ fontStyle: 'italic' }}>
              {prop.tagline}
            </Typography>
          )}
          
          {prop.office && prop.office.trim() !== "" && (
            <Typography paragraph>
              <strong>Office:</strong> {prop.office}
            </Typography>
          )}
          
          {prop.phone && prop.phone.trim() !== "" && (
            <Typography paragraph>
              <strong>Phone:</strong> {prop.phone}
            </Typography>
          )}
          
          {prop.email && prop.email.trim() !== "" && (
            <Typography paragraph>
              <strong>Email:</strong> {prop.email}
            </Typography>
          )}
          
          {prop.interestArea && prop.interestArea.trim() !== "" && (
            <Typography paragraph>
              <strong>Interest Areas:</strong> {prop.interestArea}
            </Typography>
          )}
          
          {prop.website && prop.website.trim() !== "" && (
            <Typography paragraph>
              <strong>Website:</strong> <a href={prop.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
            </Typography>
          )}
          
          {(prop.twitter || prop.facebook) && (
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              {prop.twitter && prop.twitter.trim() !== "" && (
                <Button 
                  variant="contained" 
                  size="small" 
                  href={prop.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Twitter
                </Button>
              )}
              {prop.facebook && prop.facebook.trim() !== "" && (
                <Button 
                  variant="contained" 
                  size="small" 
                  href={prop.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Facebook
                </Button>
              )}
            </Box>
          )}
        </Box>
      </Modal>
    </div>
  );
}