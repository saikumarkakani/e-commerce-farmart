


import { useEffect, useState } from 'react';
import { CloseButton } from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal';

function ModalPopup(props) {

const [show, setshow] = useState(false);

useEffect(()=>{
  setshow(props.open)
},[props.open])




  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            {
              props && props.title
            }
          </Modal.Title>
          <CloseButton onClick={()=>{props.closeModal()}}></CloseButton>
        </Modal.Header>

        <Modal.Body>
          <p>
            {
              props && props.children
            }
          </p>
        </Modal.Body>
        {
          props && props.actions && 
          <Modal.Footer>
            Footer
          </Modal.Footer>
        }

      </Modal>
    </div>
  );
}

export default ModalPopup;