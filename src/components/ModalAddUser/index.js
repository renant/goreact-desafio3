import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal from "react-modal";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ModalActions } from "../../store/ducks/modal";
import { Creators as UsersActions } from "../../store/ducks/users";

import "./styles.css";
import { Content } from "./styles";

Modal.setAppElement(document.getElementById("root"));

class ModalAddUser extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      visible: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
      cordinates: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number
        })
      ])
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired
  };

  state = {
    input: "",
    inputtext: null
  };

  handleInputChange = e => {
    this.setState({ input: e.target.value });
  };

  handleHideModal = () => {
    const { hideModal } = this.props;
    hideModal();
    this.setState({ input: "" });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { loading, addUserRequest, modal } = this.props;
    const { input } = this.state;

    if (loading) return;
    if (!input) return;

    addUserRequest(input, modal.cordinates);
    this.setState({ input: "" });
  };

  render() {
    const { modal, loading } = this.props;
    const { input } = this.state;
    return (
      <Modal
        isOpen={modal.visible}
        onRequestClose={this.handleHideModal}
        contentLabel="Add github user"
        className="modal-class"
        overlayClassName="modal-overlay-class"
      >
        <Content>
          <h2>Adicionar novo usuário do github</h2>
          <form onSubmit={this.handleFormSubmit} className="form">
            <input
              autoFocus
              placeholder="Usuário do Github"
              value={input}
              onChange={this.handleInputChange}
            />
            <div className="buttons-container">
              <button type="button" onClick={this.handleHideModal}>
                Cancelar
              </button>
              <button type="submit">
                {loading ? <i className="fa fa-spinner fa-pulse" /> : "Salvar"}
              </button>
            </div>
          </form>
        </Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  loading: state.users.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ModalActions, ...UsersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAddUser);
