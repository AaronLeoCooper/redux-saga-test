import { connect } from 'react-redux';

import { getUsers, getUsersFetching } from '../UsersRedux';

import UsersList from './UsersList';

const mapStateToMaps = state => ({
  users: getUsers(state),
  fetching: getUsersFetching(state)
});

export default connect(mapStateToMaps)(UsersList);
