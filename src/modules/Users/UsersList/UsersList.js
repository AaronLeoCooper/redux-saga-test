import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Spin, Typography as T } from 'antd';

import './UsersList.css';

function UsersList({ users, fetching }) {
  if (fetching) {
    return (
      <Row type="flex" justify="center" data-testid="UsersList">
        <Col>
          <Spin size="large" data-testid="UsersList__spinner" />
        </Col>
      </Row>
    );
  }

  return (
    <Row type="flex" gutter={16} data-testid="UsersList">
      {users.map(({ id, login, html_url, avatar_url }) => (
        <Col key={id} span={6} data-testid="UsersList__userItem">
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            <img src={avatar_url} alt={login} className="UsersList__img" />
            <T.Title level={3}>{login}</T.Title>
          </a>
        </Col>
      ))}
    </Row>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      login: PropTypes.string,
      html_url: PropTypes.string,
      avatar_url: PropTypes.string
    })
  ),
  fetching: PropTypes.bool
};

UsersList.defaultProps = {
  users: []
};

export default UsersList;
