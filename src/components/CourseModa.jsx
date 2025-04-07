//This is the file which displays the minors section course information on demand and this is teh modal used from MUI and the data comes from the proxyserver with and endpoint course.
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import getData from '../util/GetData';
import '../components/coursemodal.css';

export default function CourseModal({ courseID, title, description, subject }) {
  const [open, setOpen] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    if (open && allCourses.length === 0) {
      setLoading(true);
      getData('course/')
        .then((json) => {
          setAllCourses(json);
          setLoading(false);
          
          const foundCourse = json.find(course => 
            course.courseID === courseID || 
            course.id === courseID || 
            course.title === title
          );
          setCourseData(foundCourse || null);
        });
    } else if (open && allCourses.length > 0) {
      const foundCourse = allCourses.find(course => 
        course.courseID === courseID || 
        course.id === courseID || 
        course.title === title
      );
      setCourseData(foundCourse);
    }
  }, [open, courseID, title, allCourses]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCourseData(null);
  };

  return (
    <div className="course-modal-container">
      <Button 
        onClick={handleOpen}
        className="course-modal-button"
      >
        {courseID}
      </Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="course-modal-title"
        aria-describedby="course-modal-description"
      >
        <Box className="course-modal-content">
          {loading ? (
            <Typography className="course-modal-loading">
              Loading course details...
            </Typography>
          ) : (
            <>
              <Typography 
                id="course-modal-title"
                className="course-modal-title"
              >
                {courseData?.title || title || courseID}
              </Typography>
              
              
              <Typography className="course-modal-id">
                Course ID: {courseData?.courseID || courseID}
              </Typography>
              
              <Typography className="course-modal-description">
                {courseData?.description || description}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}