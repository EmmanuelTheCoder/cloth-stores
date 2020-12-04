import React, { Component } from 'react';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import Project from './Project';
import './AllStyles.css';


class App extends Component {
    state = {
        display: < Home / >
    }

    componentDidMount() {
        let home = document.querySelector('.home');
        home.style.background = "rgb(62, 62, 121)";
        home.style.color = "white";
    }

    homeOnclick = () => {
        this.setState({ display: < Home / > });
        let home = document.querySelector('.home');
        home.style.background = "rgb(62, 62, 121)";
        home.style.color = "white";

        let project = document.querySelector('.project');
        let service = document.querySelector('.service');
        let contact = document.querySelector('.contact');

        project.style.background = "yellow";
        project.style.color = "black";
        service.style.background = "yellow";
        service.style.color = "black";
        contact.style.background = "yellow";
        contact.style.color = "black";


    }

    serviceOnclick = () => {
        this.setState({ display: < Services / > })
        let home = document.querySelector('.home');
        home.style.background = "yellow";
        home.style.color = "black";
        let service = document.querySelector('.service');
        service.style.background = "rgb(62, 62, 121)";
        service.style.color = "white";
        let project = document.querySelector('.project');
        let contact = document.querySelector('.contact');

        project.style.background = "yellow";
        project.style.color = "black";
        contact.style.background = "yellow";
        contact.style.color = "black";

    }
    contactOnclick = () => {
        this.setState({ display: < Contact / > })
        let service = document.querySelector('.service');
        service.style.background = "yellow";
        service.style.color = "black";
        let contact = document.querySelector('.contact');
        contact.style.background = "rgb(62, 62, 121)";
        contact.style.color = "white";
        let project = document.querySelector('.project');
        let home = document.querySelector('.home');
        project.style.background = "yellow";
        project.style.color = "black";
        home.style.background = "yellow";
        home.style.color = "black";
    }
    projectOnclick = () => {
        this.setState({ display: < Project / > })
        let project = document.querySelector('.project');
        let service = document.querySelector('.service');
        let contact = document.querySelector('.contact');
        let home = document.querySelector('.home');

        project.style.background = "rgb(62, 62, 121)";
        project.style.color = "white";
        service.style.background = "yellow";
        service.style.color = "black";
        contact.style.background = "yellow";
        contact.style.color = "black";
        home.style.background = "yellow";
        home.style.color = "black";

    }

    //this is a function that will validate the the form in the Home.jsx component

    render() {
        return ( <
            div className = "container" >

            <
            a href = ""
            className = "logo" > Emmanuel 's Profile</a> <
            div className = "buttons" >
            <
            button onClick = { this.homeOnclick }
            className = "home" > Home < /button>  <
            button className = "service"
            onClick = { this.serviceOnclick } > Services < /button> <
            button className = "contact"
            onClick = { this.contactOnclick } > Contact < /button>  <
            button className = "project"
            onClick = { this.projectOnclick } > Projects < /button> < /
            div > { this.state.display }

            <
            footer >
            <
            p > Copyright of Emmanuel, 2020. All rights reserved. < /p> < /
            footer > <
            /div>
        );
    }
}

export default App;