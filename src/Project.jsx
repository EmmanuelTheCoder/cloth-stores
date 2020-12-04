import React from 'react';

const Projects = () =>{
    return(
        <div className="project">
           <div className="projectContainer">
           <h1>Projects</h1>
           </div>
           <div className="works">
               <div className="firstProject">
                    <h2>COVID-19 live stats web app</h2>
                    <p>I built this web app from scratch to help monitor the number of COVID-19 
                        cases as well as the death, recovered and total number of active cases in every country of the world.
                        I fetched the data here from an API and assigned each values to their respective log.
                        It was built using the <i>HTML5, CSS3 and JavaScript technologies </i>
                    </p>                
                </div> 
                <div className="secondProject">
                    <h2>E-voting web app</h2>
                    <p>I worked on building the front-end of an online voting website, created a responsive design by manipulating <i>CSS3 </i> 
                        ingredients and made use of <i>JavaScript</i> to make it interactive.
                    </p>
                </div>
                <div className="thirdProject">
                    <h2>GPA calculator </h2>
                    <p>I built a Grade Point Average calculator to help Nigerian university students monitor and calculate 
                        their grades and know the current academic cadre they currently stand on after each semester or section as the case may be.
                        It was built on the <i>React.js technology.</i>
                     </p>
                </div>
                <div className="fourthProject">
                    <h2>Quiz app</h2>
                    <p>This app was built to help test the knowledge of interested individuals in all works of life and to ascertain their 
                        level of preparedness for any quiz exam. <i>JavaScript</i> was used to help the app functional and interactive.


                    </p>
                </div>
           </div>
        </div>
    );
}

export default Projects;