import React, { useState, useEffect } from 'react';
import './OurHolisticApproach.css';

const LEADFramework = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimate(true);
    }, 300);
  }, []);

  return (
    <div className="lead-container">
      <div className="header text-center">
        <h1>OUR HOLISTIC APPROACH: <span className="blue-text">L.E.A.D</span></h1>
      </div>
      
      <div className="grid-container">
        {/* Local Engagement Box */}
        <div className={`box blue-box ${animate ? 'animate' : ''}`}>
          <div className="circle blue-circle">
            <span>L</span>
          </div>
          <h2>Local Engagement</h2>
          <p>
            We actively engage with local communities, schools, and
            organizations to identify the educational needs of
            underprivileged students. Through participation and
            cimmunity outreach, we connect with donors and
            beneficiaries, ensuring that resources a are effectively
            matched with those who need them most.
          </p>
        </div>
        
        {/* Empowerment Box */}
        <div className={`box red-box ${animate ? 'animate' : ''}`}>
          <div className="circle red-circle">
            <span>E</span>
          </div>
          <h2>Empowerment</h2>
          <p>
            We empower volunteers and community members to
            participate in our mission. By providing training and
            resources, we enable individuals to take an active role in
            collecting, managing, and distributing educational
            materials, fostering a sense of ownership and
            commitment to educational equity.
          </p>
        </div>
        
        {/* Access Box */}
        <div className={`box purple-box ${animate ? 'animate' : ''}`}>
          <div className="circle purple-circle">
            <span>A</span>
          </div>
          <h2>Access</h2>
          <p>
            We focus on increasing access to educational resources
            through donation drives, crowdfunding campaigns, and
            strategic partnerships. Our goal is to ensure that every
            child, regardless of their economic background, has
            access to the books, school supplies, and digital tools
            necessary for academic success.
          </p>
        </div>
        
        {/* Distribution Box */}
        <div className={`box green-box ${animate ? 'animate' : ''}`}>
          <div className="circle green-circle">
            <span>D</span>
          </div>
          <h2>Distribution</h2>
          <p>
            We systematically distribute collected resources to
            students in need, prioritizing those in rural and low-
            income urban areas. Our approach includes organizing
            community events and workshops that not only provide
            materials but also promote a culture of learning and
            sharing within the community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LEADFramework;