import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UsersActions } from "../../store/ducks/users";

import { Content } from "./style";

const LeftBar = ({ users, removeUser }) => (
  <Content>
    {!users.data.length && <p>Nenhum usuário adicionado</p>}
    <ul>
      {users.data.map(user => (
        <li key={user.id}>
          <div>
            <img src={user.avatar} alt={user.name} />
            <div className="info">
              <h2>{user.name}</h2>
              <h3>{user.login}</h3>
            </div>
            <button
              type="button"
              onClick={() => {
                removeUser(user);
              }}
            >
              <i className="fa fa-fw fa-times-circle remove" />
            </button>
            <a
              href={`https://github.com/${user.login}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-fw fa-angle-right page" />
            </a>
          </div>
        </li>
      ))}
    </ul>
  </Content>
);

LeftBar.propTypes = {
  users: PropTypes.shape({}).isRequired,
  removeUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftBar);
