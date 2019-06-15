import React from 'react';
import { Provider } from 'react-redux';
import { Layout } from 'antd';

import store from './store';

import Users from './modules/Users/Users';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Layout.Content>
          <Users />
        </Layout.Content>
      </Layout>
    </Provider>
  );
}

export default App;
