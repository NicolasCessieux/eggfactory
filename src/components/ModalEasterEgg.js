import React from "react";
import Modal from "react-modal";
import HipsterEgg from "../images/HipsterEgg.png";

export default class ModalEasterEgg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button className="btnEasterEgg" onClick={this.openModal} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <h1>Oooohhhh ! Des Hipster Egg ! lol</h1>
          <img className="HipsterEgg" src={HipsterEgg} alt="HipsterEgg"></img>
          <img className="HipsterEgg" src={HipsterEgg} alt="HipsterEgg"></img>
          <img className="HipsterEgg" src={HipsterEgg} alt="HipsterEgg"></img>
          <img className="HipsterEgg" src={HipsterEgg} alt="HipsterEgg"></img>
          <img className="HipsterEgg" src={HipsterEgg} alt="HipsterEgg"></img>
        </Modal>
      </div>
    );
  }
}
