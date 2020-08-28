import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import "./modal.css";

const modalImg = (props: any) => {
  const preview = props.item.imgSub.photo[props.index];
  const title = props.item.imgSub.title[props.index];

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        autoFocus={true}
        keyboard={true}
        animation={false}
        dialogClassName="myModal"
      >
        <Modal.Header closeButton>
          <Modal.Title className='title'>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div >
            <img className="modalImg" src={preview} alt={preview} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default modalImg;
