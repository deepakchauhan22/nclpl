import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"

const Popup = (props) => {


    // const handleClose = () => setShow(false);

//     const handleClose = () => {
//         show = false;
//     }
//    console.log(show)


    
  return (
    <Modal show={props.new}>
      <Modal.Body>Action Successful
      </Modal.Body>
      <Modal.Footer><button>close</button>
        </Modal.Footer>
    </Modal>
  );
};

export default Popup;





