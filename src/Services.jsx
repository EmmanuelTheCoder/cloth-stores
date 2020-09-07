import React from 'react';

const Services = () =>{
    return(
        <div>
            <div className="serviceContainer">
                <h1 className="services">Services</h1>
                <ul className="listItems">
                    <li>Web development</li>
                    <li>Software development</li>
                    <li>Techical writing</li>
                    <li>Free mentorship for aspiring/junior developers </li>
                </ul>

                <div className="technologyUsed">
                    <h1>Technologies used</h1>
                    <ul className="technologyLists">
                        <li>React.js</li> 
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Services;