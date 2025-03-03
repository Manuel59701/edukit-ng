import React from 'react';
import "./SDG.css";
import sdg1 from "./sectionimages/sdg1.png";
import sdg4 from "./sectionimages/sdg4.png";
import sdg10 from "./sectionimages/sdg10.png";
import sdg12 from "./sectionimages/sdg12.png";
import sdg17 from "./sectionimages/sdg17.png";

const SDG = () => {
<<<<<<< HEAD
    return ( 
        <div className="SDG_container">
            {/* <div className="SDG_header">
                <h2 className="SDG_title"> <span className= "blueTitle">SDG</span> GOALS WE ADDRESS</h2>
                <p className="SDG_description">
                Edukit Nigeria is committed to driving positive change by addressing critical global challenges through the lens of education. Our efforts align with several of the <span className='blueText'>United Nations Sustainable Development Goals (SDGs)</span>, focusing on reducing inequalities, promoting quality education, and fostering sustainability <span className='blueLink'>(https://www.un.org/sustainabledevelopment).</span>
                </p>
            </div>

            <div className="SDG_grid">
                <div className="SDG_box">
                    <img src="/images/SDG1.png" alt="SDG1" className="SDG_image"/>
                    <p className="SDG_text">No Poverty</p>
                </div>
                <div className="SDG_box">
                    <img src="/images/SDG2.png" alt="SDG2" className="SDG_image"/>
                    <p className="SDG_text">Zero Hunger</p>
                </div>
                <div className="SDG_box">
                    <img src="/images/SDG3.png" alt="SDG3" className="SDG_image"/>
                    <p className="SDG_text">Good Health and Well-being</p>
                </div>
                <div className="SDG_box">
                    <img src="/images/SDG4.png" alt="SDG4" className="SDG_image"/>
                    <p className="SDG_text">Quality Education</p>
                </div>
                <div className="SDG_box">
                    <img src="/images/SDG5.png" alt="SDG5" className="SDG_image"/>
                    <p className="SDG_text"> </p>
                </div>
            </div>
          */}
=======
  return ( 
    <div className="SDG_container">
      <div className="SDG_header">
        <h2 className="SDG_title"> <span className= "blueText">SDG</span> GOALS WE ADDRESS</h2>
        <p className="SDG_description">
        Edukit Nigeria is committed to driving positive change by addressing critical global challenges through the lens of education. Our efforts align with several of the <span className='blueText'>United Nations Sustainable Development Goals (SDGs)</span>, focusing on reducing inequalities, promoting quality education, and fostering sustainability  <a href="#" className='blueLink'>(https://www.un.org/sustainabledevelopment).</a>
        </p>
      </div>

      <div className="SDG_grid">
        <div className="SDG_box">
          <img src={sdg1} alt="SDG1" className="SDG_image"/>
          <p className='card-title'>Ending poverty through education.</p>
          <p className="SDG_text">By equipping underprivileged students with essential academic resources, we strive to break the cycle of poverty, empowering both students and their communities through education.</p>
>>>>>>> 4319848a57b7b2dc116770e1c6b4a4a39b9f4e35
        </div>

        <div className="SDG_box">
          <img src={sdg4} alt="SDG4" className="SDG_image"/>
          <p className='card-title'>Quality Education for All</p>
          <p className="SDG_text">We work to ensure inclusive and equitable access to quality education by distributing learning materials, launching an e-library, and fostering partnerships that prioritize student success.</p>
        </div>

        <div className="SDG_box">
          <img src={sdg10}alt="SDG10" className="SDG_image"/>
          <p className='card-title'>Bridging Gaps in Education</p>
          <p className="SDG_text">Our platform levels the playing field by connecting disadvantaged students with the resources they need to thrive, regardless of their socioeconomic status.</p>
        </div>

        <div className="SDG_box">
          <img src={sdg12} alt="SDG12" className="SDG_image"/>
          <p className='card-title'>Promoting Reuse of Educational Materials</p>
          <p className="SDG_text">Through resource redistribution, we promote sustainability by minimizing waste and ensuring unused educational materials are repurposed for meaningful use.</p>
        </div>

        <div className="SDG_box">
          <img src={sdg17}alt="SDG17" className="SDG_image"/>
          <p className='card-title'>Collaborating for Impact</p>
          <p className="SDG_text">We foster collaborations with donors, schools, and organizations to scale our initiatives and maximize the reach and effectiveness of our programs.</p>
        </div>

      </div>
         

    </div>
  );
};

export default SDG;