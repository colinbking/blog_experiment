import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
   <div className="site-footer">
<script src="https://kit.fontawesome.com/03300d180a.js" crossOrigin="anonymous"></script>

       <h4>
               Colin's Blog
       </h4>    
       <p className="text0center"> Follow me here, too</p>
       <div className = "footer-social-links">
               <ul className = "social-links-list">
                        <li>
                                <a 
                                href = "https://www.github.com/colinbking" 
                                target = "_blank" 
                                rel="noopener noreferrer" 
                                className="github">
                                        <i className = "fab fa-github fa-2x"/>
                                </a>
                        </li>
                        <li>
                                <a 
                                href = "https://www.linkedin.com/in/colinbking" 
                                target = "_blank" 
                                rel="noopener noreferrer" 
                                className="linkedin">
                                        <i className = "fab fa-linkedin fa-2x"/>
                                </a>
                        </li>
                        <li>
                                <a 
                                href = "https://www.google.com" 
                                target = "_blank" 
                                rel="noopener noreferrer" 
                                className="google">
                                        <i className = "fab fa-google fa-2x"/>
                                </a>
                        </li>
                        <li>
                                <a 
                                href = "https://www.facebook.com/colin.king.90281943/" 
                                target = "_blank" 
                                rel="noopener noreferrer" 
                                className="facebook">
                                        <i className = "fab fa-facebook-f fa-2x"/>
                                </a>
                        </li>
                        <li>
                                <a 
                                href = "https://www.yelp.com/user_details?userid=2fKJeKlPi9le_ta7DPVW_A" 
                                target = "_blank" 
                                rel="noopener noreferrer" 
                                className="yelp">
                                        <i className = "fab fa-yelp fa-2x"/>
                                </a>
                        </li>
               </ul>
       </div>
   </div>


)

export default Footer