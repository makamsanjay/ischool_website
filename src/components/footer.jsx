// This is where the footer content goes from to the project and the content comens from proxy server with and end point footer/
import React, { useState, useEffect } from 'react';
import getData from '../util/GetData';
import './Footer.css';

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    getData('footer/')
      .then((json) => {
        console.log('Footer data got', json);
        setFooterData(json);
      });
  }, []);

  if (!footerData) return <p>Loading...</p>;

  return (
    <footer className="footer">
      <section className="social-section">
        <h3>{footerData.social.title}</h3>
        <p>{footerData.social.tweet}</p>
        <p>By: {footerData.social.by}</p>
        <a href={footerData.social.twitter} target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
        <a href={footerData.social.facebook} target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
      </section>

      <section className="quickLinks-section">
        <h3>Quick Links</h3>
        <ul>
          {footerData.quickLinks.map((link, index) => (
            <li key={index}><a href={link.href} target="_blank" rel="noopener noreferrer" className="footer-link">{link.title}</a></li>
          ))}
        </ul>
      </section>

      <section className="copyright-section" dangerouslySetInnerHTML={{ __html: footerData.copyright.html }} />
      
      <section className="news-section">
        <a href={footerData.news} target="_blank" rel="noopener noreferrer" className="footer-link">Latest News</a>
      </section>
    </footer>
  );
}

export default Footer;
