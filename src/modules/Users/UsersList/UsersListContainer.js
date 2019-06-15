import { connect } from 'react-redux';

import { getUsers, getUsersFetching, getUsersError } from '../UsersRedux';

import UsersList from './UsersList';

const mapStateToMaps = state => ({
  users: getUsers(state),
  fetching: getUsersFetching(state),
  error: getUsersError(state)
});

export default connect(mapStateToMaps)(UsersList);
