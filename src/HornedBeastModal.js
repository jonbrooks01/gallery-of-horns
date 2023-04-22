import React from "react";
import { Button, Modal, Image } from "react-bootstrap";

class HornedModal extends React.Component {
  render() {
    console.log(this.props.hornedBeast)
    return (
      <>
      <Modal show={this.props.showModal} onHide={this.props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.hornedBeast.title}</Modal.Title>
        </Modal.Header >

        <Modal.Body>
        
         <Image src={this.props.hornedBeast.image_url} alt={this.props.hornedBeast.title}/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={this.props.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  }
}

export default HornedModal;