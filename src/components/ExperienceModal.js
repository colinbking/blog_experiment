/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import Img from 'gatsby-image';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ExperienceModal = (props) => {
  const {
    buttonLabel,
    className,
    ModalTitle,
    ModalSubtitle,
    ModalText,
    ModalImage,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="light" onClick={toggle}><img src={ModalImage} width = "195" height ="195"></img></Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}><h4>{ModalTitle}</h4><h5>{ModalSubtitle}</h5></ModalHeader>
        <ModalBody>
                <div className="text-center"><img src={ModalImage} width = "400"></img></div>
                <br/>
                {ModalText}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ExperienceModal;