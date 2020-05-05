import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from '../components/resume.pdf'
import Experience from '../components/ExperienceModal.js'

import {
        Card, CardImg, CardText, CardBody,
        CardTitle, CardSubtitle, Button, Row, Col, Jumbotron
      } from 'reactstrap';
      

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords ={['gatsby', 'application', 'react']}/>
    
    <div>
      <Jumbotron>
        <h1 className="display-4">Hi, I'm Colin, creator of thesunnysideup.</h1>
        <p> This is my personal site, built using Gatsby JS, made to hold my thoughts and ideas. 
        It also serves as a page to point people (especially recruiters) to if they want to learn more about me.
         thesunnysideup holds my favorite recipies and workouts, as well as some random thoughts and musings of mine. 
         </p>
         <p classname="lead">Scroll down to learn more about me as a professional, or take a look at my <a href={Resume} target="_blank">resume</a> </p>
    

      </Jumbotron>
    </div>

        <br></br>

        
        {/* Exp  */}
        <div>
        <h2> Work Experience</h2>
        <div className = "experience">
                <Col sm="12" xs="auto">
                        <Row xs="auto" className = "experience"> 
                                <Experience 
                                        buttonLabel="CDK Global" 
                                        ModalTitle="Software Engineer Intern"
                                        ModalSubtitle="June 2020 - August 2020"
                                        ModalText="During my time at APC, I developed and
                                        implemented a chemical batch treatment plan in the
                                        Delaware Basin to save the company over $2 MM annually."
                                        ModalImage="https://www.maleon.com/wp-content/uploads/cdk-logo.png"
                                        >
                                </Experience>
                                <Experience 
                                        buttonLabel="Anadarko Petroleum Company" 
                                        ModalTitle="Anadarko Petroleum Company (APC)"
                                        ModalSubtitle="May 2019 - August 2019"
                                        ModalText="During my time at APC, I developed and
                                        implemented a chemical batch treatment plan in the
                                        Delaware Basin to save the company over $2 MM annually."
                                        ModalImage="https://cdn.freebiesupply.com/logos/large/2x/anadarko-petroleum-logo-png-transparent.png"
                                        >
                                </Experience>

                                <Experience className = "experience"
                                buttonLabel="Rice University" 
                                ModalTitle="Teaching Assistant, Computer Science Dept."
                                ModalSubtitle="September 2019 - Present"
                                ModalText="During my time at APC, I developed and
                                implemented a chemical batch treatment plan in the
                                Delaware Basin to save the company over $2 MM annually."
                                ModalImage="http://localhost:8000/static/a41cdd85be97483ac1dd4c6860d87853/a5de4/Ricelogo.jpg"
                                >
                                </Experience>
                        
                                <Experience 
                                buttonLabel="Baylor College of Medicine" 
                                ModalTitle="Anadarko Petroleum Company (APC)"
                                ModalText="During my time at APC, I developed and
                                implemented a chemical batch treatment plan in the
                                Delaware Basin to save the company over $2 MM annually."
                                ModalImage="https://garp.research.bcm.edu/images/BaylorCollegeOfMedicine.png"
                                >
                                </Experience>
             
                                <Experience 
                                buttonLabel="East West Tea" 
                                ModalTitle="Anadarko Petroleum Company (APC)"
                                ModalSubtitle="September 2018 - Present"
                                ModalText="During my time at APC, I developed and
                                implemented a chemical batch treatment plan in the
                                Delaware Basin to save the company over $2 MM annually."
                                ModalImage="https://images.squarespace-cdn.com/content/58559451725e25a3d8206027/1482003769935-DKI42LTKUTYLDC49ZOOF/Logo+no+background.png?content-type=image%2Fpng"
                                >
                                </Experience>
                        </Row>
                </Col>
                </div>

        </div>
        <hr></hr>
        <br></br>

        {/* Skills  */}
        <div>
        <h2> Skills</h2>
        <Row>
                <Col><h3>Python</h3></Col>
                <Col><h3>Java</h3></Col>
                <Col><h3>C</h3></Col>
                <Col><h3>SQL</h3></Col>
                <Col><h3>MATLAB</h3></Col>
                <Col><h3>AWS (EC2)</h3></Col>
                <Col><h3>Apache Spark</h3></Col>

        </Row>

        </div>
        <hr></hr>
        <br></br>


        {/* Projects  */}

        <div>
                <h2> Check out some of my favorite projects</h2>
                I've done a few hackathons (and even won a few!). Feel free to a look at my <a href = "http://github.com/colinbking" target="_blank">github</a>  for more of my work.
                <br></br>
                <div>
                        <Row>
                        <Col sm="4">
                        <Card>
                                <CardImg top width="5%" src="https://github.com/michaelsprintson/me.nu/blob/tim/menu_read/static/images/menuLogo.png?raw=true" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Me.nu</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                                </CardBody>
                        </Card>
                        </Col>
                        <Col sm="4">
                        <Card>
                                <CardImg top width="5%" src="https://github.com/michaelsprintson/me.nu/blob/tim/menu_read/static/images/menuLogo.png?raw=true" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Me.nu</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                                </CardBody>
                        </Card>
                        </Col>
                        <Col sm="4">
                        <Card>
                                <CardImg top width="5%" src="https://github.com/michaelsprintson/me.nu/blob/tim/menu_read/static/images/menuLogo.png?raw=true" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Me.nu</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                                </CardBody>
                        </Card>
                        </Col>
                        </Row>
                </div>

    <div>

            {/* Other Activities  */}
        <div>
        <h2> Other Activities</h2>

        </div>
        <hr></hr>
        <br></br>


    </div>
        </div>

    

  </Layout>
)

export default AboutPage
