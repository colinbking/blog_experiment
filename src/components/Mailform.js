import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle} from 'reactstrap';

export default class EmailListForm extends React.Component {
              
            
              render () {
                return (
                        <Card>
                        <CardBody>
                                <CardTitle className="text-center text-uppercase mb-3">
                                        Newsletter
                                </CardTitle>
                                <h2> Subscribe to be notified about new posts</h2>
                                <form 
                                        method="post"
                                        name="contact"
                                        data-netlify="true"
                                        data-netlify-honeypot="bot-field">


                                        <input
                                        placeholder="Your email address"
                                        name="email"
                                        type="text"
                                        />
                                        <Button> Subscribe </Button>
                                </form>
                        </CardBody>
        </Card>
                  
                )
              }
}

