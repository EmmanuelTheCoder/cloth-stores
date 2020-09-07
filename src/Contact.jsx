import React from 'react';
import './AllStyles.css'

    const Contact = () =>{
        return(
            <div>
                <div className="contactContainer">

                    <h1 className="contactH1">Contact Me!</h1>
                    <p>
                        You can contact me by using any of the following social platforms below with just a single click to
                         request my services.
                        
                    </p>
                </div>

                    <div className="socialCounter">
                        <table>
                            <tbody>
                            <th>Social Counter</th>
                            <tr> <a href="https://facebook.com/emmanuel.aiyeniga">Facebook</a></tr>
                            <tr> <a href=" mailto:loyaltysamuel001@gmail.com"> e-mail</a></tr>
                            <tr> <a href="https://wa.me/+2348147367859">WhatsApp</a></tr>
                            <tr><a href="https://twitter.com/loyaltyUpdates">Twitter</a></tr>
                            </tbody>
                        </table>

                    </div>
                

                
            </div>
           
        );
}


export default Contact;