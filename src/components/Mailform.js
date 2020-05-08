// import React, { useState } from 'react';
// import addToMailchimp from 'gatsby-plugin-mailchimp';
// import { Button, Card, CardBody, CardTitle} from 'reactstrap';

// export default class EmailListForm extends React.Component {


//         _handleSubmit = async (e) => {
//                 e.preventDefault();
//                 const result = await addToMailchimp(email, listFields)
//                 // I recommend setting `result` to React state
//                 // but you can do whatever you want
//                 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//                         e.preventDefault();
//                       };
//                 const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//                         setEmail(event.currentTarget.value);
//                       };
//               }
              
            
//               render () {
//                 return (
//                         <Card>
//                         <CardBody>
//                                 <CardTitle className="text-center text-uppercase mb-3">
//                                         Newsletter
//                                 </CardTitle>
//                                 <form onSubmit={this._handleSubmit(email, {listFields})}>
//                                 <input
//                                 placeholder="Email address"
//                                 name="email"
//                                 type="text"
//                                 onChange={handleEmailChange}
//                                 />
//                                 <h2> Subscribe to be notified about new posts</h2>
//                                 <Button> Subscribe </Button>
//                                 </form>
//                         </CardBody>
//         </Card>
                  
//                 )
//               }
// }

