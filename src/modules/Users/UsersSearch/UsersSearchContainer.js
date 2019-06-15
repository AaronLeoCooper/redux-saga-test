import { connect } from 'react-redux';

import { startFetch } from '../UsersRedux';

import UsersSearch from './UsersSearch';

const mapStateToMaps = state => ({});

const mapDispatchToMaps = {
  startFetch
};

export default connect(
  mapStateToMaps,
  mapDispatchToMaps
)(UsersSearch);
