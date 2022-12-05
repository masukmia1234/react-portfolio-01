import React from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio/work1.png';
import IMG2 from '../../assets/portfolio/work2.png';
import IMG3 from '../../assets/portfolio/work3.png';
import IMG4 from '../../assets/portfolio/work4.png';
import IMG5 from '../../assets/portfolio/work5.png';
import IMG6 from '../../assets/portfolio/work6.png';



const Portfolio=()=> {
  return (
   <section id='portfolio'>
      <ScreenHeading title={"Recent Work"} subHeading={"Visit my recent all works and give your valuable suggestion to me after viewing all projects"} />
      <div className='portfolio-conatiner'>
         <artical className='portfolio-item'>
            <div className='portfolio-item-image'>
           <img src={IMG1} alt='portfolio-item'/>
            </div>
            <h3>This is a portfolio item </h3>
            <div className='portfolio-item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/shots/17657996-wcc-personal-portfolio-design' className='btn btn-primary' >Live Demo</a>
            </div>
         </artical>
            {/* work 2 start */}
         <artical className='portfolio-item'>
            <div className='portfolio-item-image'>
           <img src={IMG2} alt='portfolio-item'/>
            </div>
            <h3>This is a portfolio item </h3>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/shots/17657996-wcc-personal-portfolio-design' className='btn btn-primary' >Live Demo</a>

         </artical>
         {/* work 3 */}
         <artical className='portfolio-item'>
            <div className='portfolio-item-image'>
           <img src={IMG3} alt='portfolio-item'/>
            </div>
            <h3>This is a portfolio item </h3>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/shots/17657996-wcc-personal-portfolio-design' className='btn btn-primary' >Live Demo</a>

         </artical>
         {/* portfolio 4  */}
         <artical className='portfolio-item'>
            <div className='portfolio-item-image'>
           <img src={IMG4} alt='portfolio-item'/>
            </div>
            <h3>This is a portfolio item </h3>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/shots/17657996-wcc-personal-portfolio-design' className='btn btn-primary' >Live Demo</a>

         </artical>
         {/* portfolio 5  */}
         <artical className='portfolio-item'>
            <div className='portfolio-item-image'>
           <img src={IMG5} alt='portfolio-item'/>
            </div>
            <h3>This is a portfolio item </h3>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/shots/17657996-wcc-personal-portfolio-design' className='btn btn-primary' >Live Demo</a>

         </artical>
         {/* portfolio  6  */}
         <artical className='portfolio-item'>
            <div className='portfolio-item-image'>
           <img src={IMG6} alt='portfolio-item'/>
            </div>
            <h3>This is a portfolio item </h3>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/shots/17657996-wcc-personal-portfolio-design' className='btn btn-primary' >Live Demo</a>

         </artical>

      </div>
   
         

   </section>
  );
}

export default Portfolio;
