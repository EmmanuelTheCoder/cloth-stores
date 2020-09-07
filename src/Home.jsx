import React, { Component } from 'react';
import './AllStyles.css';

class Home extends Component{

    validate = () =>{
        let fullName = document.getElementById('.fullName');
         if(fullName.value = "something else"){
             return alert('somethng is indeed wrong here');

         }
    }
    render(){
        return(
            <div>
        
                <div className="containerHome">
                    <br />
                    <br />
                    <p className="serviceRequest">Request for my services</p>
                    <hr  className="hr"/>
                    <form action="mailto:loyaltysamuel001@gmail.com" method="POST" className="arrangeForms">
                        <label htmlFor="fullname">Full Name: </label>
                        <input type="text" name="full-name" className="input" id="fullName"/>
                        <label htmlFor="e-mailAddress">Email address: </label>
                        <input type="text" name="E-mail" className="input email"/>
                        <label htmlFor="Mobile-number">Mobile Number <span className="optional">(optional)</span>: </label>
                        <input type="text" name="Mobile-Number" className="input mobile"/>
                        <label htmlFor="typeOfJob">Type of services needed</label> 
                        <select name="jobType" id="jobType">
                            <option value="Web development">Web development</option>
                            <option value="software development">Software development</option>
                            <option value="Technical writing">Technical writing</option>
                            <option value="Mentorship">Mentorship</option>
                        </select>
                        
                            <input type="submit" className="submit" value="Send Request!" onClick={this.validate}/>
                    </form>
                </div>
    
                <p>Reminder that a picture will be here</p>
    
                <div className="invitation">
                    <h1>Hello, People!</h1>
                    <p>I am a Web and Software developer skilled in HTML5, CSS3, Javascript and React.js technologies.
                        I have the experience and knowledge needed to perform any task with the aforementioned
                        technologies be it on a large or small scale. <a href="./project.jsx">Check out some of my projects</a>
                    </p>
                </div>
            </div>
        ); 
    }
}

export default Home;