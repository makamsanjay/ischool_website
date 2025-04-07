import React from 'react';

const IntroductionSection = ({ introContent }) => {
  return (
    <section className="introduction-section">
      {introContent.map((item, index) => (
        <div key={`intro-${index}`} className="intro-item">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default IntroductionSection;