import React from "react"
// import { Link } from "gatsby"

import AboutLayout from "../components/AboutLayout"
import SEO from "../components/seo"
import Resume from '../components/resume.pdf'
import Img from 'gatsby-image'
import Experience from '../components/ExperienceModal.js'

import {
        Card, CardImg, CardText, CardBody,
        CardTitle, CardSubtitle, Button, Row, Col, Jumbotron
      } from 'reactstrap';
      

const AboutPage = () => (
<div className="about-page">
  <AboutLayout>
    <SEO title="About" keywords ={['gatsby', 'application', 'react']}/>
    
    <div>
      <Jumbotron >
        <div className="top-jumbo"> 
                <h1 className="display-4"> Hi, I'm Colin.</h1>
                <Row>
                        <Col sm="1"></Col>
                <Col sm ="5">
                <div className="lead-text">
                        <p classname ="lead">
                                <br/> thesunnysideup is a website I built using Gatsby JS, made to hold my thoughts and ideas. 
                        It also serves as a page to point people to if they want to learn more about me.
                        This website holds my favorite recipies and workouts, as well as some random thoughts and musings of mine. 
                        </p>
                        <h4 classname="lead">Scroll down to learn more about me as a professional, or feel free to take a look at my <a href={Resume} target="_blank">resume</a>. </h4>
                </div>
                </Col>
                <Row>
                        <img style={{position: "absolute", paddingBottom: "300px", marginBottom: "300px", top: "5px"}} height="870px" src="https://i.imgur.com/BQwxyQh.png"></img>
                                <div className = "about-social-links" style={{display:"flex", verticalAlign: "middle", paddingTop: "10px"}}>
                                        <ul className="about-social-links-list" style={{ position: "absolute", display:"inline", justifyContent: 'right', paddingLeft: "375px", paddingTop: "20px", paddingBottom: "auto", verticalAlign: "middle"}}>
                                                <li>
                                                        <a 
                                                        href = "https://www.github.com/colinbking" 
                                                        target = "_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="github">
                                                                <i className = "fab fa-github fa-3x"/>
                                                        </a>
                                                </li>
                                                <li><br></br></li>

                                                <li>
                                                        <a 
                                                        href = "https://www.linkedin.com/in/colinbking" 
                                                        target = "_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="linkedin">
                                                                <i className = "fab fa-linkedin fa-3x"/>
                                                        </a>
                                                </li>
                                                <li><br></br></li>

                                                <li>
                                                        <a 
                                                        href = "mailto:cbk1@rice.edu"
                                                        target = "_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="google">
                                                                <i className = "far fa-envelope fa-3x"/>
                                                        </a>
                                                </li>
                
                                        </ul>
                                        
                                </div>
                </Row>

                </Row>

        </div>
</Jumbotron>

    </div>

        <br></br>

        
        {/* Exp  */}
        <div className="work">
        <h1>Work Experience</h1>
        <h6 style ={{
                textAlign: "center",
                padding: "1px"
        }}>(Click to read more about an experience)</h6>

        <div className="work-content">
                <Col sm="12" xs="auto" className="exp-col" >
        
                        <Row xs="auto" className="exp-row" style={{display: "flex",
                                verticalAlign: "middle",
                                padding: "5px",
                                alignItems: "center",
                                justifyContent: "center"}} >> 

                                <Experience 
                                className ="experience"
                                        buttonLabel="CDK Global" 
                                        ModalTitle="Software Engineering Intern"
                                        ModalSubtitle="June 2020 - August 2020"
                                        ModalText="Incoming Software Engineering Intern for the Summer of 2020"
                                        ModalImage="https://www.maleon.com/wp-content/uploads/cdk-logo.png"
                                        >

                                </Experience>

                                <Experience 
                                
                                className ="experience"
                                        buttonLabel="Anadarko Petroleum Company" 
                                        ModalTitle="Anadarko Petroleum Company (APC)"
                                        ModalSubtitle="May 2019 - August 2019"
                                        ModalText="During my time at APC, I developed and
                                        implemented a new chemical batch treatment protocol in the
                                        Delaware Basin to save the company over $2 MM annually. I also helped transition
                                        the company to an online platform for scheduling and tracking batch treatments"
                                        ModalImage="https://cdn.freebiesupply.com/logos/large/2x/anadarko-petroleum-logo-png-transparent.png"
                                        >
                                </Experience>

                                <Experience className = "experience"
                                buttonLabel="Rice University" 
                                ModalTitle="Teaching Assistant"
                                ModalSubtitle="September 2019 - Present"
                                ModalText="I served as a teaching assistnant for the courses Computational Programming for
                                 Chemical Engineering, Fundamentals of Computer Engineering, and Introduction to Program Design. 
                                 For all of the classes, I assisted with students' coding projects, taught 
                                 concepts, and graded code submissions."
                                ModalImage="https://i.imgur.com/8BJ5RZy.jpg"
                                >
                                </Experience>
                        
                                <Experience 
                                
                                className ="experience"
                                buttonLabel="Baylor College of Medicine" 
                                ModalSubtitle="May 2018 - August 2018 "
                                ModalTitle="Lab Assistant in the Bissig Lab"
                                ModalText="As an assistant in Dr. Karl Dimiter Bissig's cell and gene therapy lab,
                                I helped construct synthesize gRNA constructs to target genes Agt and DDC, as part of the lab's
                                focus on metabolic pathway reprogramming."
                                ModalImage="https://upload.wikimedia.org/wikipedia/commons/5/5d/Baylor_College_of_Medicine_Logo.png"
                                >
                                </Experience>
             
                                <Experience 
                                
                                className ="experience"
                                buttonLabel="East West Tea" 
                                ModalTitle="Boba Chef, Cashier"
                                ModalSubtitle="September 2018 - Present"
                                ModalText="In my free time, I work at one of the only student owned and led businesses at Rice University. I've cooked for and helped to organize events that served over 200 people. "
                                ModalImage="https://images.squarespace-cdn.com/content/58559451725e25a3d8206027/1482003769935-DKI42LTKUTYLDC49ZOOF/Logo+no+background.png?content-type=image%2Fpng"
                                >
                                </Experience>
                        </Row>
                </Col>
                </div>

        </div>
        <hr></hr>
        <br></br>




        {/* Projects  */}

        <div>
                <h1> Projects </h1>
                <h3> I take my favorite ideas and develop them into real applications with friends. </h3>
                <Col>                <p> I've also participated in a few hackathons/datathons with these ideas (and even won a few!). Feel free to a look at my <a href = "http://github.com/colinbking" target="_blank">github</a>  for more of my work.</p></Col>
                <br></br>
                <div>
                        <Row>
                        <Col sm="4">
                        <Card>
                                <CardImg top width="5%" src="https://github.com/michaelsprintson/me.nu/blob/tim/menu_read/static/images/menuLogo.png?raw=true" alt="Card image cap" />
                                <CardBody>
                                <CardTitle><h3 style={{textAlign: "left"}}>Me.nu</h3></CardTitle>
                                <CardSubtitle><h6 style={{marginTop:0}}> <i>HackRice 9 — First Place Overall, Best Use of Data Science</i></h6></CardSubtitle>
                                <CardText>Using a predictive model that draws from existing reviews on Yelp and Google, as well as
                                        your own preferences and past meals to provide optimal menu reccomendations at any restuarant. Boasts an 
                                        easy to use interface that uses OCR via Google Vision to parse menus. 
                                </CardText>
                                <Button href="http://www.github.com/colinbking/me.nu" target="_blank">Explore on Github</Button>
                                </CardBody>
                        </Card>
                        </Col>
                        <Col sm="4">
                        <Card>
                                <CardImg top width="5%" src="http://localhost:8000/static/4cfdf9e1086d6629d25281e42121a11b/df997/test.png" alt="Card image cap" />
                                <CardBody>
                                <CardTitle><h3 style={{textAlign: "left"}}>R.C.E. Analytics</h3></CardTitle>
                                <CardSubtitle><h6 style={{marginTop:0}}>Rice Datathon 2020 — First Place Overall</h6></CardSubtitle>
                                <CardText>A data pipeline that reveals key statistics about Rice's course evaluation (RCE) data.
                                        Implements a Naive Bayesian Classifier to gauge levels of student happiness and course effectiveness, orders course comments
                                        by helpfullness, and reveals the most influential aspects of a curriculum to the professors.
                                </CardText>
                                <Button href="https://github.com/colinbking/riceDatathon2020" target="_blank">Explore on GitHub</Button>
                                </CardBody>
                        </Card>
                        </Col>
                        <Col sm="4">
                        <Card>
                                <CardImg top width="5%" src="https://github.com/colinbking/aware/raw/master/app/src/main/res/mipmap-hdpi/car_icon.png" alt="Card image cap" />
                                <CardBody>
                                <CardTitle><h3 style={{textAlign: "left"}}>Aware</h3></CardTitle>
                                <CardSubtitle><h6 style={{marginTop:0}}>PennApps XX</h6></CardSubtitle>
                                <CardText>Protecting drivers and reducing unnecessary accidents by alerting drivers of nearby drivers' intentions. 
                                        Allows users to send and respond to requests to change lanes, pass other cars, merge into other lanes, and more, with a hands free interface using
                                        speech to text technology.
                                        </CardText>
                                <Button href="https://github.com/colinbking/aware"  target="_blank">Explore on Github</Button>
                                </CardBody>
                        </Card>
                        </Col>
                        </Row>
                </div>

    <div>
            <hr></hr>
            <br></br>

    {/* Skills  */}
        <div padding="100px">
                <h1> Skills</h1>
                <div>
                        <Row>
                        <Col sm={{ size: 'auto', offset: 3 }} >
                                <Row><h3>Python</h3></Row>
                                <Row><h3>Java</h3></Row>
                                <Row><h3>C</h3></Row>
                                <Row><h3>SQL</h3></Row>
                                <Row><h3>MATLAB</h3></Row>
                                <Row><h3>AWS (EC2)</h3></Row>
                                <Row><h3>Apache Spark</h3></Row>
                                <Row><h3>HTML/CSS</h3></Row>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 2 }} >
                                <Row><h3>English (Native)</h3></Row>
                                <Row><h3>Chinese (Native)</h3></Row>
                                <Row><h3>Korean (Beginnner)</h3></Row>

                        </Col>  
                        </Row>

                </div>
        </div>
        <hr></hr>
        <br></br>

            {/* Other Activities  */}
        <div>
        <h2> Other Activities</h2>
                
                        <Row style={{textAlign:"center"}}>
                        <Col sm={{ size: 'auto'}} >
                        <h3>President of <a href="http://www.ricesase.com" target="_blank"> Rice SASE </a> </h3>
                        </Col>
                        </Row>
                        
        </div>
        <hr></hr>
        <br></br>


    </div>
        </div>

    

  </AboutLayout>
  </div>
)

export default AboutPage
