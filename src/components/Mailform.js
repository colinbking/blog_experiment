import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, Row, Col} from 'reactstrap';

export default class EmailListForm extends React.Component {
              
            
              render () {
                return (
                        
                        <Card>
                        <CardBody>
                                <CardTitle className="text-center text-uppercase mb-3">
                                        Newsletter
                                </CardTitle>
                                <h3> Stay in touch </h3>
                                <form className="text-center"
                                        method="POST"
                                        name="Newsletter-Form"
                                        data-netlify="true"
                                        netlify-honeypot="bot-field">

                                        <Row>
                                                <Col xs="12">
                                        <div style = {{alignContent: "center"}}>
                                        <input
                                        style ={{padding: "10px"}}
                                        placeholder="Your email address"
                                        name="email"
                                        type="text"
                                        />
                                        <Button outline color="success" style ={{paddingTop:"10px", paddingLeft: "10px"}}> Subscribe </Button>
                                        </div>
                                        </Col>
                                        </Row>
                                        
                                        
                                </form>
                        </CardBody>
        </Card>
                  
                )
              }
}

