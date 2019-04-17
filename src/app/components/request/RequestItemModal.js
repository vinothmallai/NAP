import React from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class RequestItemModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal:false
    }

    this.close = this.close.bind(this);
  }

  close() {    
    this.props.closeModal();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({showModal: nextProps.showModal});
  }

  render() {
    return(
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.item.requestReference}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

RequestItemModal.defaultProps = {
  item: {
    requestReference:''
  }
}
