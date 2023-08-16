import React from 'react';
import logoo from '../assets/ritik_black.png'

const Info = () => {
  let tablinks = document.getElementsByClassName("tab-links");
  let tabcontents = document.getElementsByClassName("titles-content");
  
  const opentab = (tabname)=>{
    for(let i=0;i<3;++i)
    {
      tablinks[i].classList.remove("active");
    }
    for(let i=0;i<3;++i)
    {
      tabcontents[i].classList.remove("active-tab");
    }
    // for(ea of tablinks){
      // tablinks.forEach(element.getElementsByClassName("tab-links") => {
      //   remove("active");
      // });
      // tablinks.classList.remove("active");
    // }
    // for(tabcontent of tabcontents){
      // tabcontents.classList.remove("active-tab");
    // }

  }

  return (
    <div id='info'>
        <div className='container'>
          <div className="row">
             <div className="first">
              <img src={logoo} alt="ritik" />
             </div>
             <div className="second">
              <h1>About Myself</h1>
              <p>
              I am a final year student from Bundelkhand Institute of Engineering and Technology, 
              Jhansi pursuing Bachelor of Technology in Computer Science and Engineering. <br />
              I love competitive programming and 
              Data Structures and have solved 1000+ problems on different programming platforms. I always try 
              to solve a problem in as many ways as possible in the most optimized way. <br />
              I am a passionate and agile learner with a keen interest in Data Structures and Web Development. 
              </p>
              <div className="titles">
                <p className = "tab-links" className='active' onClick="opentab('skills')">Skills</p>
                <p className = "tab-links" onClick="opentab('education')">Education</p>
                <p className = "tab-links" onClick="opentab('achievements')">Achievements</p>
              </div>
              <div className="titles-content active-tab" id ="skills">
                <ul>
                  <li><span>Data Structures</span><br />Solved 1000+ questions</li>
                  <li><span>Frontend Development</span><br />Build two Projects</li>
                  <li><span>Backend Development</span><br />Build one Project</li>
                </ul>
              </div>

              <div className="titles-content" id ="education">
                <ul>
                  <li><span>Data Structures</span><br />Solved 1000+ questions</li>
                  <li><span>Frontend Development</span><br />Build two Projects</li>
                  <li><span>Backend Development</span><br />Build one Project</li>
                </ul>
              </div>

              <div className="titles-content" id ="achievements">
                <ul>
                  <li><span>Data Structures</span><br />Solved 1000+ questions</li>
                  <li><span>Frontend Development</span><br />Build two Projects</li>
                  <li><span>Backend Development</span><br />Build one Project</li>
                </ul>
              </div>
             </div>
          </div>
        </div>
    </div>
  )
}

export default Info;