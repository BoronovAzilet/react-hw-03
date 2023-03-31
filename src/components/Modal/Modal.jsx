import React, { Component } from "react";
import { createPortal } from "react-dom";
const myModal = document.getElementById("modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onCloseModal);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onCloseModal);
  }
  onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
    if (e.key === "Escape") {
      this.props.closeModal();
    }
  };
  render() {
    const { children } = this.props;

    return createPortal(
      <div className="Overlay" onClick={this.onCloseModal}>
        <div className="Modal">{children}</div>
      </div>,
      myModal
    );
  }
}
